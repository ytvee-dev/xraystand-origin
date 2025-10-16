import React, { type ReactElement, useRef, useState, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';
import type {HomeContent} from "../../types";
import { svgSpriteSrcPrefix } from "@utils/constants";
import paths from "@modules/home/locales/paths.json";
import "./style.css";

export interface CoverSectionProps {
    content: HomeContent;
    lang: 'kz' | 'ru';
}

const FORM_ID = import.meta.env.VITE_FROMSPREE_ID ?? '123xyz';

const i18n = {
    ru: {
        placeholder: "Введите ваш e-mail",
        buttonText: "Получить консультацию",
        emailErrorText: "Введен некорректный почтовый адрес",
        thanksText: "Благодарим за заявку. В ближайшее время с вами свяжется менеджер!",
    },
    kz: {
        placeholder: "Электрондық поштаңызды енгізіңіз",
        buttonText: "Кеңес алу",
        emailErrorText: "Жарамсыз электрондық пошта мекенжайы",
        thanksText: "Өтінішіңіз үшін рақмет. Жақын арада менеджер сізбен байланысады!",
    },
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const logoPath: string = `${svgSpriteSrcPrefix}logo-color`;

const CoverSection: React.FC<CoverSectionProps> = ({ content, lang }): ReactElement => {
    const t = i18n[lang] ?? i18n.ru;
    const [state, handleSubmit] = useForm(FORM_ID);

    const placeholder = t.placeholder;
    const buttonText = t.buttonText;
    const emailErrorText = t.emailErrorText;
    const thanksText = t.thanksText;

    const inputRef = useRef<HTMLInputElement>(null);
    const honeyRef = useRef<HTMLInputElement>(null);
    const [localError, setLocalError] = useState<string>("");

    useEffect(() => {
        if (!localError) return;
        const hideOnClick = () => setLocalError("");
        document.addEventListener("click", hideOnClick, { once: true, capture: true });
        return () => document.removeEventListener("click", hideOnClick, { capture: true });
    }, [localError]);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const email = inputRef.current?.value?.trim() || "";
        const honey = honeyRef.current?.value || "";

        if (honey) return;

        if (!EMAIL_RE.test(email)) {
            setLocalError(emailErrorText);
            return;
        }

        setLocalError("");
        await handleSubmit(e);
    };

    if (state.succeeded) {
        return (
            <section id="home-welcome" className="hero-section">
                <div className="home-hero-form-wrapper">
                    <div className="home-hero-thanks">
                        <h2>{thanksText}</h2>
                    </div>
                    <div className="hero-holder-right"></div>
                </div>
                <div className="home-hero-cover">
                    <div className="hero-cover-image-wrapper">
                        <img src={paths.backgrounds.cover} alt='' />
                    </div>
                    <div className="hero-holder-right"></div>
                </div>
            </section>
        );
    }

    return (
        <section id="home-welcome" className="hero-section">
            <div className="home-hero-form-wrapper">
                <div className="home-hero-form-logo">
                    <svg width="32px" height="40px" color={"#EFFA7A"}>
                        <use href={logoPath} />
                    </svg>
                </div>

                <div className="home-hero-form-title">
                    <h1>{content.coverSection.title}</h1>
                </div>

                <div className="home-hero-form-label">
                    <p>{content.coverSection.description}</p>
                </div>

                <form onSubmit={handleFormSubmit} className={`home-hero-form-input ${state.submitting ? 'loading' : ''}`}>
                    <input
                        type="email"
                        name="email"
                        ref={inputRef}
                        placeholder={placeholder}
                        required
                        aria-invalid={!!localError}
                        disabled={state.submitting}
                        onFocus={() => localError && setLocalError("")}
                        onInput={() => localError && setLocalError("")}
                    />
                    <input
                        ref={honeyRef}
                        type="text"
                        name="company"
                        tabIndex={-1}
                        autoComplete="off"
                        style={{ display: "none" }}
                    />
                    <input type="hidden" name="subject" value="Только почта" />
                    <button type="submit" disabled={state.submitting}>
                        <span>{state.submitting ? "Отправка..." : buttonText}</span>
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.2063 6.70859C14.5969 6.31797 14.5969 5.68359 14.2063 5.29297L9.20625 0.292969C8.81563 -0.0976562 8.18125 -0.0976562 7.79063 0.292969C7.4 0.683594 7.4 1.31797 7.79063 1.70859L11.0875 5.00234H1.5C0.946875 5.00234 0.5 5.44922 0.5 6.00234C0.5 6.55547 0.946875 7.00234 1.5 7.00234H11.0844L7.79375 10.2961C7.40312 10.6867 7.40312 11.3211 7.79375 11.7117C8.18437 12.1023 8.81875 12.1023 9.20938 11.7117L14.2094 6.71172L14.2063 6.70859Z"
                                fill="black"/>
                        </svg>
                    </button>
                </form>
                
                {localError && <p className="form-error visible">{localError}</p>}
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                {state.errors && Object.keys(state.errors).length > 0 && (
                    <p className="form-error visible">
                        Произошла ошибка при отправке. Попробуйте еще раз.
                    </p>
                )}

                <div className="hero-holder-right"></div>
            </div>

            <div className="home-hero-cover">
                <div className="hero-cover-image-wrapper">
                    <img src={paths.backgrounds.cover} alt='' />
                </div>
                <div className="hero-holder-right"></div>
            </div>
        </section>
    );
};

export default CoverSection;
