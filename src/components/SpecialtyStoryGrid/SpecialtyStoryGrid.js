import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
	return (
		<Wrapper>
			<MarketsSection>
				<SectionTitle
					cornerLink={{
						href: "/markets",
						content: "Visit Markets data »",
					}}
				>
					Markets
				</SectionTitle>
				<MarketCards>
					{MARKET_DATA.map((data) => (
						<MarketCard key={data.tickerSymbol} {...data} />
					))}
				</MarketCards>
			</MarketsSection>
			<SportsSection>
				<SectionTitle
					cornerLink={{
						href: "/sports",
						content: "Visit Sports page »",
					}}
				>
					Sports
				</SectionTitle>
				<SportsStories>
					{SPORTS_STORIES.map((data) => (
						<MiniStory key={data.id} {...data} />
					))}
				</SportsStories>
			</SportsSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	gap: 48px;
	grid-template-columns: minmax(0, 1fr);

	@media ${QUERIES.desktopAndUp} {
		grid-auto-flow: column;
		grid-template-columns: 1fr minmax(0, 1fr);
		gap: 0;
	}
`;

const MarketsSection = styled.section`
	@media ${QUERIES.desktopAndUp} {
		padding-inline-end: 24px;
		border-inline-end: 1px solid var(--color-gray-300);
	}
`;

const MarketCards = styled.div`
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));
`;

const SportsSection = styled.section`
	@media ${QUERIES.desktopAndUp} {
		padding-inline-start: 24px;
	}
`;

const SportsStories = styled.div`
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));

	@media ${QUERIES.tabletAndUp} {
		grid-template-columns: unset;
		grid-auto-flow: column;
		grid-auto-columns: 220px;
		overflow-y: auto;
	}
`;

export default SpecialtyStoryGrid;
