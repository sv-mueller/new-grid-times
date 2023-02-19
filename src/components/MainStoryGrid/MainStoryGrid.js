import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
	return (
		<Wrapper>
			<MainStorySection>
				<MainStory {...MAIN_STORY} />
			</MainStorySection>

			<SecondaryStorySection>
				<StoryList>
					{SECONDARY_STORIES.map((story, index) => (
						<StoryListItem>
							<SecondaryStory key={story.id} {...story} />
						</StoryListItem>
					))}
				</StoryList>
			</SecondaryStorySection>

			<OpinionSection>
				<SectionTitle>Opinion</SectionTitle>
				<OpinionList>
					{OPINION_STORIES.map((story, index) => (
						<OpinionListItem>
							<OpinionStory key={story.id} {...story} />
						</OpinionListItem>
					))}
				</OpinionList>
			</OpinionSection>

			<AdvertisementSection>
				<Advertisement />
			</AdvertisementSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-areas:
		"main-story"
		"secondary-stories"
		"opinion-stories"
		"advertisement";
	gap: 48px;
	margin-bottom: 48px;
	@media ${QUERIES.tabletAndUp} {
		grid-template-areas:
			"main-story secondary-stories"
			"advertisement advertisement"
			"opinion-stories opinion-stories";
		grid-template-columns: 2fr 1fr;
		gap: 32px 0;
	}
	@media ${QUERIES.desktopAndUp} {
		grid-template-areas:
			"main-story secondary-stories opinion-stories"
			"main-story advertisement advertisement";
		grid-template-columns: 5fr 4fr 2fr;
		gap: 16px;
	}
`;

const MainStorySection = styled.section`
	grid-area: main-story;
	@media ${QUERIES.tabletAndUp} {
		padding-inline-end: 16px;
		border-inline-end: 1px solid var(--color-gray-300);
	}
`;

const SecondaryStorySection = styled.section`
	grid-area: secondary-stories;
	@media ${QUERIES.tabletAndUp} {
		padding-inline-start: 16px;
	}
	@media ${QUERIES.desktopAndUp} {
		padding-inline-end: 16px;
		border-inline-end: 1px solid var(--color-gray-300);
	}
`;

const StoryList = styled.div`
	display: grid;
	grid-auto-flow: row;
`;

const OpinionList = styled(StoryList)`
	@media ${QUERIES.tabletOnly} {
		grid-template-columns: repeat(auto-fill, minmax(min-content, 1fr));
		grid-auto-flow: column;
		gap: 32px;
	}
`;

const StoryListItem = styled.div`
	padding: 16px 0;
	border-bottom: 1px solid var(--color-gray-300);

	:first-of-type {
		padding-top: 0;
	}
	:last-of-type {
		padding-bottom: 0;
		border-bottom: unset;
	}
`;

const OpinionListItem = styled(StoryListItem)`
	@media ${QUERIES.tabletOnly} {
		border-bottom: unset;
		padding-top: unset;
		padding-bottom: unset;
	}
`;

const OpinionSection = styled.section`
	grid-area: opinion-stories;
	@media ${QUERIES.tabletAndUp} {
		padding-inline-start: 16px;
	}
`;

const AdvertisementSection = styled.section`
	grid-area: advertisement;
	@media ${QUERIES.desktopAndUp} {
		border-top: 1px solid var(--color-gray-300);
		padding-top: 16px;
		margin-inline-start: 16px;
	}
`;

export default MainStoryGrid;
