import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
	return (
		<header>
			<SuperHeader>
				<Row>
					<ActionGroup>
						<button>
							<Search size={24} />
						</button>
						<button>
							<Menu size={24} />
						</button>
					</ActionGroup>
					<DesktopMainHeader>
						<Logo />
					</DesktopMainHeader>
					<ActionGroup>
						<UserButton>
							<User size={24} />
						</UserButton>
						<Subscribe>
							<SubscribeButton>Subscribe</SubscribeButton>
							<SubscribeLink>Already a subscriber?</SubscribeLink>
						</Subscribe>
					</ActionGroup>
				</Row>
			</SuperHeader>
			<MobileMainHeader>
				<Logo />
			</MobileMainHeader>
		</header>
	);
};

const SuperHeader = styled.div`
	padding: 16px 0;
	background: var(--color-gray-900);
	color: var(--color-white);
	@media ${QUERIES.desktopAndUp} {
		background: var(--color-gray-100);
		color: var(--color-offblack);
	}
`;

const Row = styled(MaxWidthWrapper)`
	display: flex;
	justify-content: space-between;
`;

const ActionGroup = styled.div`
	display: flex;
	gap: 24px;

	/*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
	svg {
		display: block;
	}
`;

const DesktopMainHeader = styled.div`
	display: none;
	@media ${QUERIES.desktopAndUp} {
		display: unset;
	}
`;

const MobileMainHeader = styled(MaxWidthWrapper)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 32px;
	margin-bottom: 48px;
	@media ${QUERIES.desktopAndUp} {
		display: none;
	}
`;

const UserButton = styled.button`
	@media ${QUERIES.desktopAndUp} {
		display: none;
	}
`;

const Subscribe = styled.div`
	display: none;
	align-self: flex-end;
	margin-bottom: 2px;
	flex-direction: column;
	align-items: center;
	gap: 6px;
	@media ${QUERIES.desktopAndUp} {
		display: flex;
	}
`;

const SubscribeButton = styled.button`
	background: var(--color-primary);
	color: var(--color-white);
	font-weight: var(--font-weight-bold);
	font-family: var(--font-family-sans-serif);
	padding: 6px 24px;
	border-radius: 4px;
	text-transform: uppercase;
`;

const SubscribeLink = styled.a`
	text-decoration: underline;
	font-family: var(--font-family-serif);
	font-size: calc((14 / 16) * 1rem);
`;

export default Header;
