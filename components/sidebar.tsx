import styled from "styled-components";
import { Logo } from "./common/logo";
import * as Icon from "@icons";
import { useRouter } from "next/router";

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

			&:focus {
				border-radius: 8px;
			}

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
	const { asPath, push } = useRouter();
	return (
		<Styled>
			<Logo />
			<div>
				<ul>
					<li
						className={asPath === "/" ? "active" : ""}
						onClick={() => push("/")}>
						<Icon.Dashboard />
						Dashboard
					</li>
					<li
						className={asPath === "/transaction" ? "active" : ""}
						onClick={() => push("/transaction")}>
						<Icon.Transactions />
						Transactions
					</li>
					<li
						className={asPath === "/invoices" ? "active" : ""}
						onClick={() => push("/invoices")}>
						<Icon.Invoices />
						Invoices
					</li>
					<li
						className={asPath === "/myWallets" ? "active" : ""}
						onClick={() => push("/myWallets")}>
						<Icon.Wallet />
						My Wallets
					</li>
					<li
						className={asPath === "/settings" ? "active" : ""}
						onClick={() => push("/settings")}>
						<Icon.Settings />
						Settings
					</li>
				</ul>
				<ul>
					<li>
						<Icon.Help />
						Help
					</li>
					<li onClick={() => push("/signin")}>
						<Icon.Logout />
						Logout
					</li>
				</ul>
			</div>
		</Styled>
	);
};
