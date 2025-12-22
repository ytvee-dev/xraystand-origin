import type { TCard } from "@modules/math/Sections/SecondSection";

export type TFlexDirection =
  | "row"
  | "column"
  | "column-reverse"
  | "row-reverse";

export const getFlexDirection = (card: TCard): TFlexDirection => {
  const id: number = Number(card.id.split("-")[1]);
  if (id % 2 == 0) {
    return "row";
  }
  return "row-reverse";
};
