import type {TCard} from "@modules/math/Sections/SecondSection";
import type {TFlexDirection} from "@modules/math/components/CubeCard";

export const getFlexDirection = (card: TCard): TFlexDirection => {
    const id: number = Number(card.id.slice(card.id.length-2, -1));
    if (id % 2 == 0) {
        return 'row';
    }
    return 'row-reverse';
}
