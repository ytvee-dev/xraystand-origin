import type { ReactElement } from "react";
import ChildCard from "../ChildCard";
import * as paths from "@modules/physics/locales/paths.json";
import "./style.css";

export type TCardsNames =
  | "newton1"
  | "newton2"
  | "energyConservation"
  | "currentAndVoltage"
  | "archimedes"
  | "universalGravity";

export interface SubCard {
  text: string;
  imageName?: TCardsNames;
}

export interface ParentCardProps {
  title: string;
  subCards: SubCard[];
}

const formulas = paths.formulas as Record<TCardsNames, string>;

const ParentCard = ({ title, subCards }: ParentCardProps): ReactElement => {
  return (
    <div className="parent-wrapper">
      <h3>{title}</h3>

      {subCards.map((card, index) => {
        const image = card.imageName ? formulas[card.imageName] : undefined;
        return <ChildCard key={index} text={card.text} img={image} />;
      })}
    </div>
  );
};

export default ParentCard;