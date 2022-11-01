import styled from "styled-components";
import { Logo } from "./common/logo";
import * as Icon from "@icons";
import Link from "next/link";

const Styled = styled.div`
	width: 250px;
	height: 100vh;
	background: ${p => p.theme.colors.bg_secondary};
	position: relative;

	> img {
		position: absolute;
		top: 30px;
		left: 25px;
	}

	> div {
		display: flex;
		justify-content: space-between;
		flex-direction: column;

		height: calc(100vh - 200px);
		padding: 100px 25px;

		li {
			height: 48px;
			border-radius: 8px;
			display: flex;
			align-items: center;
			padding-left: 16px;
			color: ${p => p.theme.colors.text_third};

			a {
				display: flex;
				align-items: center;
				color: ${p => p.theme.colors.text_third};
			}

			svg {
				padding-right: 12px;
				path {
					fill: ${p => p.theme.colors.text_third};
				}
			}
		}

		.active {
			background: ${p => p.theme.colors.button_bg_primary};
			color: ${p => p.theme.colors.text_primary};

			a {
				color: ${p => p.theme.colors.text_primary};
			}

			svg > path {
				fill: ${p => p.theme.colors.text_primary};
			}
		}
	}
`;

export const Sidebar = () => {
	return (
		<Styled>
			<Logo />
			<div>
				<ul>
					<li className="active">
						<Link href="/">
							<Icon.Dashboard />
							Dashboard
						</Link>
					</li>
					<li>
						<Link href="/transaction">
							<Icon.Transactions />
							Transactions
						</Link>
					</li>
					<li>
						<Link href="/invoices">
							<Icon.Invoices />
							Invoices
						</Link>
					</li>
					<li>
						<Link href="/myWallets">
							<Icon.Wallet />
							My Wallets
						</Link>
					</li>
					<li>
						<Link href="/settings">
							<Icon.Settings />
							Settings
						</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Icon.Help />
						Help
					</li>
					<li>
						<Link href={"/signin"}>
							<Icon.Logout />
							Logout
						</Link>
					</li>
				</ul>
			</div>
		</Styled>
	);
};
