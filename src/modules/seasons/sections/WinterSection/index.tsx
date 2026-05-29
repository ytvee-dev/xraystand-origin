import type { ReactElement } from "react";
import type { SeasonsProps } from "@modules/seasons/types";
import ThirdSection from "./ThirdSection";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
// import { type SeasonsProps } from "@modules/seasons/types";
// import { type ReactElement } from "react";
import "./style.css";

const WinterSection = ({ content }: SeasonsProps): ReactElement => {
	const cards = content.content;
	const firstSectionCards = cards.slice(0, 4);
	const secondSectionCards = cards.slice(5, 8);

	return (
		<section className="seasons-winter-sections-bg">
			<FirstSection
				title={content.title}
				description={content.description}
				content={firstSectionCards}
			/>
			<SecondSection
				title=""
				description={cards[4].title}
				content={secondSectionCards}
			/>
			<ThirdSection
				title={cards[8].title}
				activityCards={cards.slice(9, 12)}
				safetyTitle={cards[12].title}
				safetyCards={cards.slice(13, 17)}
			/>
		</section>
	);
};

export default WinterSection;
