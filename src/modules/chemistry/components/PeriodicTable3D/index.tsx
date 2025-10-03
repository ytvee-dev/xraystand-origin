import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { CSS3DRenderer, CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import TWEEN from "three/examples/jsm/libs/tween.module.js";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import "./style.css";

export type MinimalElement = {
    number: number;
    symbol: string;
    name: string;
    category: string;
    atomic_mass?: string | number;
    xpos?: number;
    ypos?: number;
};

export type Props = {
    elements: MinimalElement[];
    onPick?: (el: MinimalElement) => void;
    buttons: {
        table: string;
        sphere: string;
        helix: string;
        grid: string;
    };
};

export type Targets = {
    table: THREE.Object3D[];
    sphere: THREE.Object3D[];
    helix: THREE.Object3D[];
    grid: THREE.Object3D[];
};

const CATEGORY_COLORS: Record<string, string> = {
    "Актиноид": "rgba(127,181,174,0.8)",
    "Галоген": "rgba(255,149,149,0.8)",
    "Инертный газ": "rgba(218,162,224,0.8)",
    "Лантаноид": "rgba(161,220,204,0.8)",
    "Неметалл": "rgba(167,208,74,0.8)",
    "Переходный металл": "rgba(153,192,229,0.8)",
    "Полуметалл": "rgba(90,192,232,0.8)",
    "Постпереходный металл": "rgba(117,161,228,0.8)",
    "Радиоактивный металл": "rgba(90,192,232,0.8)",
    "Щелочноземельный металл": "rgba(254,177,73,0.8)",
    "Щелочной металл": "rgba(253,104,99,0.8)",
    "актиноид": "rgba(127,181,174,0.8)",
    "галоген": "rgba(255,149,149,0.8)",
    "инертті газ": "rgba(218,162,224,0.8)",
    "лантоид": "rgba(161,220,204,0.8)",
    "бейметалл": "rgba(167,208,74,0.8)",
    "өтпелі металл": "rgba(153,192,229,0.8)",
    "жартылай металл": "rgba(90,192,232,0.8)",
    "өтпелі металлдерден кейінгі металл": "rgba(117,161,228,0.8)",
    "радиоактивті металл": "rgba(90,192,232,0.8)",
    "сілтілік-жер металлдары": "rgba(254,177,73,0.8)",
    "сілтілік металл": "rgba(253,104,99,0.8)",
};

const PeriodicTable3D: React.FC<Props> = ({ elements, onPick, buttons }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const aliveRef = useRef<boolean>(false);
    const onPickRef = useRef<((el: MinimalElement) => void) | undefined>(undefined);
    useEffect(() => {
        onPickRef.current = onPick;
    }, [onPick]);

    const threeRef = useRef<{
        camera: THREE.PerspectiveCamera;
        scene: THREE.Scene;
        renderer: CSS3DRenderer;
        controls: TrackballControls;
        objects: CSS3DObject[];
        targets: Targets;
    } | null>(null);

    const { targetsGen } = useMemo(() => {
        return {
            targetsGen: (objectsCount: number) => {
                const t: Targets = { table: [], sphere: [], helix: [], grid: [] };
                const vector = new THREE.Vector3();

                for (let i = 0, l = objectsCount; i < l; i++) {
                    const phi = Math.acos(-1 + (2 * i) / l);
                    const theta = Math.sqrt(l * Math.PI) * phi;
                    const o = new THREE.Object3D();
                    o.position.setFromSphericalCoords(800, phi, theta);
                    vector.copy(o.position).multiplyScalar(2);
                    o.lookAt(vector);
                    t.sphere.push(o);
                }

                for (let i = 0, l = objectsCount; i < l; i++) {
                    const theta = i * 0.175 + Math.PI;
                    const y = -(i * 8) + 450;
                    const o = new THREE.Object3D();
                    o.position.setFromCylindricalCoords(900, theta, y);
                    vector.set(o.position.x * 2, o.position.y, o.position.z * 2);
                    o.lookAt(vector);
                    t.helix.push(o);
                }

                for (let i = 0; i < objectsCount; i++) {
                    const o = new THREE.Object3D();
                    o.position.x = (i % 5) * 400 - 800;
                    o.position.y = -(Math.floor(i / 5) % 5) * 400 + 800;
                    o.position.z = Math.floor(i / 25) * 1000 - 2000;
                    t.grid.push(o);
                }

                return t;
            },
        };
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        if (threeRef.current) return;

        const init = () => {
            const el = container as HTMLDivElement;
            const width = el.clientWidth || window.innerWidth;
            const height = el.clientHeight || window.innerHeight;

            const camera = new THREE.PerspectiveCamera(40, width / height, 1, 10000);
            camera.position.z = 3000;

            const scene = new THREE.Scene();
            scene.background = new THREE.Color("#ffffff");

            const renderer = new CSS3DRenderer();
            renderer.setSize(width, height);
            renderer.domElement.style.pointerEvents = "auto";
            renderer.domElement.style.touchAction = "none";
            el.appendChild(renderer.domElement);

            el.style.touchAction = "manipulation";
            el.style.overflow = "hidden";
            
            el.addEventListener("touchstart", () => {
            }, { passive: true });
            
            el.addEventListener("touchmove", (e) => {
                e.preventDefault();
            }, { passive: false });

            const controls = new TrackballControls(camera, renderer.domElement);
            controls.minDistance = 500;
            controls.maxDistance = 6000;
            
            controls.noZoom = false;
            controls.noPan = true;
            controls.noRotate = false;
            
            controls.addEventListener('start', () => {
                document.body.style.overflow = 'hidden';
            });
            
            controls.addEventListener('end', () => {
                document.body.style.overflow = '';
            });

            const objects: CSS3DObject[] = [];
            const targets: Targets = { table: [], sphere: [], helix: [], grid: [] };

            for (let i = 0; i < elements.length; i++) {
                const elData = elements[i];

                const card = document.createElement("div");
                card.className = "pt3d-element";
                card.style.pointerEvents = "auto";
                card.style.zIndex = "5";

                const baseColor = CATEGORY_COLORS[elData.category] ?? "#CCCCCC";
                card.style.backgroundColor = baseColor;
                card.style.border = `1px solid ${baseColor}`;
                card.style.boxShadow = `0 0 12px ${baseColor}`;

                const number = document.createElement("div");
                number.className = "pt3d-number";
                number.textContent = String(elData.number ?? i + 1);
                card.appendChild(number);

                const symbol = document.createElement("div");
                symbol.className = "pt3d-symbol";
                symbol.textContent = elData.symbol ?? "?";
                card.appendChild(symbol);

                const details = document.createElement("div");
                details.className = "pt3d-details";
                details.innerHTML = `${elData.name ?? ""}<br>${elData.atomic_mass ?? ""}`;
                card.appendChild(details);

                let downX = 0,
                    downY = 0,
                    moved = false,
                    downT = 0;
                const CLICK_MOVE_THRESHOLD = 5;
                const CLICK_TIME_THRESHOLD = 300;

                card.addEventListener("pointerdown", (e) => {
                    downX = e.clientX;
                    downY = e.clientY;
                    downT = performance.now();
                    moved = false;
                    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
                });

                card.addEventListener("pointermove", (e) => {
                    if (moved) return;
                    const dx = Math.abs(e.clientX - downX);
                    const dy = Math.abs(e.clientY - downY);
                    if (dx > CLICK_MOVE_THRESHOLD || dy > CLICK_MOVE_THRESHOLD) {
                        moved = true;
                        e.preventDefault();
                    }
                });

                const firePick = () => {
                    const fn = onPickRef.current;
                    if (fn) fn(elData);
                };

                card.addEventListener("pointerup", (e) => {
                    const dt = performance.now() - downT;
                    const dx = Math.abs(e.clientX - downX);
                    const dy = Math.abs(e.clientY - downY);
                    const isClick = !moved && dx < CLICK_MOVE_THRESHOLD && dy < CLICK_MOVE_THRESHOLD && dt < CLICK_TIME_THRESHOLD;
                    if (isClick) {
                        controls.enabled = false;
                        firePick();
                        setTimeout(() => {
                            controls.enabled = true;
                        }, 0);
                        e.stopPropagation();
                        e.preventDefault();
                    }
                });

                card.addEventListener("click", (e) => {
                    const dt = performance.now() - downT;
                    const dx = Math.abs(e.clientX - downX);
                    const dy = Math.abs(e.clientY - downY);
                    const isClick = !moved && dx < CLICK_MOVE_THRESHOLD && dy < CLICK_MOVE_THRESHOLD && dt < CLICK_TIME_THRESHOLD;
                    
                    if (isClick) {
                        controls.enabled = false;
                        firePick();
                        setTimeout(() => {
                            controls.enabled = true;
                        }, 0);
                        e.stopPropagation();
                    }
                });

                card.addEventListener("touchstart", (e) => {
                    downX = e.touches[0].clientX;
                    downY = e.touches[0].clientY;
                    downT = performance.now();
                    moved = false;
                }, { passive: true });

                card.addEventListener("touchmove", (e) => {
                    e.preventDefault();
                }, { passive: false });

                card.addEventListener("touchend", (e) => {
                    const dt = performance.now() - downT;
                    const dx = Math.abs(e.changedTouches[0].clientX - downX);
                    const dy = Math.abs(e.changedTouches[0].clientY - downY);
                    const isClick = !moved && dx < CLICK_MOVE_THRESHOLD && dy < CLICK_MOVE_THRESHOLD && dt < CLICK_TIME_THRESHOLD;
                    
                    if (isClick) {
                        controls.enabled = false;
                        firePick();
                        setTimeout(() => {
                            controls.enabled = true;
                        }, 0);
                        e.stopPropagation();
                    }
                }, { passive: true });

                const objectCSS = new CSS3DObject(card);
                objectCSS.position.x = Math.random() * 4000 - 2000;
                objectCSS.position.y = Math.random() * 4000 - 2000;
                objectCSS.position.z = Math.random() * 4000 - 2000;
                scene.add(objectCSS);
                objects.push(objectCSS);

                const o = new THREE.Object3D();
                const col = elData.xpos ?? (i % 18) + 1;
                const row = elData.ypos ?? Math.floor(i / 18) + 1;
                o.position.x = col * 140 - 1330;
                o.position.y = -(row * 180) + 990;
                targets.table.push(o);
            }

            const extra = targetsGen(objects.length);
            targets.sphere = extra.sphere;
            targets.helix = extra.helix;
            targets.grid = extra.grid;

            threeRef.current = { camera, scene, renderer, controls, objects, targets };
            aliveRef.current = true;

            const render = () => renderer.render(scene, camera);

            const transform = (targetsList: THREE.Object3D[], duration: number) => {
                if (!aliveRef.current) return;
                TWEEN.removeAll();

                for (let i = 0; i < objects.length; i++) {
                    const object = objects[i];
                    const target = targetsList[i];

                    new TWEEN.Tween(object.position)
                        .to(
                            { x: target.position.x, y: target.position.y, z: target.position.z },
                            Math.random() * duration + duration
                        )
                        .easing(TWEEN.Easing.Exponential.InOut)
                        .start();

                    new TWEEN.Tween(object.rotation)
                        .to(
                            { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z },
                            Math.random() * duration + duration
                        )
                        .easing(TWEEN.Easing.Exponential.InOut)
                        .start();
                }

                new TWEEN.Tween({}).to({}, duration * 2).onUpdate(render).start();
            };

            const ro = new ResizeObserver((entries) => {
                if (!aliveRef.current) return;
                const rect = entries[0].contentRect;
                const w = Math.max(1, Math.floor(rect.width));
                const h = Math.max(1, Math.floor(rect.height));
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
                renderer.setSize(w, h);
                render();
            });
            ro.observe(el);

            const animate = () => {
                if (!aliveRef.current) return;
                TWEEN.update();
                controls.update();
                render();
                rafRef.current = requestAnimationFrame(animate);
            };
            animate();

            transform(targets.sphere, 1200);

            (el as HTMLDivElement & {
                __transformTo?: (t: THREE.Object3D[], d: number) => void;
            }).__transformTo = transform;

            return () => {
                aliveRef.current = false;
                if (rafRef.current) cancelAnimationFrame(rafRef.current);
                ro.disconnect();
                controls.dispose();
                renderer.domElement.remove();
                threeRef.current = null;
            };
        };

        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w === 0 || h === 0) {
            const id = requestAnimationFrame(() => setTimeout(init, 0));
            return () => cancelAnimationFrame(id);
        }
        const cleanup = init();
        return cleanup;
    }, [elements, targetsGen]);

    const onLayout = (type: keyof Targets) => {
        const inst = threeRef.current;
        if (!inst) return;
        const parent = inst.renderer.domElement.parentElement as HTMLDivElement & {
            __transformTo?: (t: THREE.Object3D[], d: number) => void;
        };
        parent.__transformTo?.(inst.targets[type], 1000);
    };

    return (
        <div className="pt3d-root" style={{ width: "100vw" }}>
            <div className="pt3d-menu">
                <ButtonGroup variant="outlined" aria-label="Basic button group" className='buttons-group'>
                    <Button variant="outlined" onClick={() => onLayout("table")}>
                        {buttons.table}
                    </Button>
                    <Button variant="outlined" onClick={() => onLayout("sphere")}>
                        {buttons.sphere}
                    </Button>
                    <Button variant="outlined" onClick={() => onLayout("helix")}>
                        {buttons.helix}
                    </Button>
                    <Button variant="outlined" onClick={() => onLayout("grid")}>
                        {buttons.grid}
                    </Button>
                </ButtonGroup>
            </div>
            <div className="pt3d-container" ref={containerRef} />
        </div>
    );
};

export default React.memo(PeriodicTable3D);
