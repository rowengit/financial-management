import styled from "styled-components";
import { Balance, WalletAdd } from "@icons";
import { Char } from "@components/char";
import { AfterLogin } from "@wrapper/afterLogin";
import { Table } from "@styles/table.styled";

const Styled = styled.main`
	width: calc(100% - 250px - 80px);
	display: grid;
	grid-template-columns: 3fr 1fr;
	gap: 40px;
	margin-right: 40px;

	.summary {
		margin-bottom: 30px;
		display: flex;
		justify-content: space-between;
		gap: 25px;
		> div {
			display: flex;
			gap: 15px;
			align-items: center;
			width: 100%;
			padding: 24px 20px;
			border-radius: 10px;

			span {
				width: 42px;
				height: 42px;
				border-radius: 100%;

				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
			}

			> div {
				p {
					&:first-child {
						font-size: 14px;
						color: ${p => p.theme.colors.text_third};
						margin-bottom: 10px;
					}

					&:last-child {
						font-weight: 700;
						font-size: 24px;
					}
				}
			}

			&:first-child {
				background: ${p => p.theme.colors.bg_third};
				span {
					background: ${p => p.theme.colors.bg_fourth};
				}

				svg > path {
					fill: ${p => p.theme.colors.button_bg_primary};
				}

				> div {
					p:last-child {
						color: #fff;
					}
				}
			}

			&:not(:first-child) {
				background: ${p => p.theme.colors.gray_1};
				span {
					background: ${p => p.theme.colors.gray_2};
				}

				> div {
					p:last-child {
						color: ${p => p.theme.colors.text_primary};
					}
				}
			}
		}
	}

	.title {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;

		h2 {
			font-weight: 600;
			font-size: 18px;
		}

		a {
			color: ${p => p.theme.colors.button_bg_secondary};
		}
	}
`;

const Recent = styled.div`
	margin-top: 30px;
	border: 1px ${p => p.theme.colors.border_third} solid;
	border-radius: 10px;
	padding: 20px 25px;
`;

const WalletRecent = styled.div`
	width: 100%;
	display: table;
	border-collapse: collapse;

	> div {
		display: table-row;
		border-bottom: 1px ${p => p.theme.colors.gray_3} solid;

		> div {
			display: table-cell;
			line-height: 53px;
			vertical-align: middle;

			&:last-child {
				text-align: right;
			}

			span {
				display: block;
				font-size: 14px;
				line-height: 14px;

				&:last-child {
					margin-top: 7px;
					line-height: 12px;
					font-size: 12px;
					color: ${p => p.theme.colors.text_third};
				}
			}
		}
	}
`;

export default function Dashboard() {
	return (
		<AfterLogin title="Dashboard">
			<Styled>
				<section>
					<div className="summary">
						<div>
							<span>
								<Balance />
							</span>
							<div>
								<p>Total balance</p>
								<p>$5,240.21</p>
							</div>
						</div>
						<div>
							<span>
								<Balance />
							</span>
							<div>
								<p>Total Spending</p>
								<p>$250.80</p>
							</div>
						</div>
						<div>
							<span>
								<WalletAdd />
							</span>
							<div>
								<p>Total Saved</p>
								<p>$550.25</p>
							</div>
						</div>
					</div>
					<Char />
					<Recent>
						<div className="title">
							<h2>Recent Transaction</h2>
							<a>View All</a>
						</div>
						<Table LineHeight="53px">
							<div className="header">
								<div>NAME/BUSINESS</div>
								<div>TYPE</div>
								<div>AMOUNT</div>
								<div>DATE</div>
							</div>
							<div>
								<div>Iphone 13 Pro Max</div>
								<div>Mobile</div>
								<div>$420.84</div>
								<div>14 Apr 2022</div>
							</div>
							<div>
								<div>Netflix Subscription</div>
								<div>Entertainment</div>
								<div>$100.00</div>
								<div>05 Apr 2022</div>
							</div>
							<div>
								<div>Figma Subscription</div>
								<div>Software</div>
								<div>$244.20</div>
								<div>02 Apr 2022</div>
							</div>
						</Table>
					</Recent>
				</section>
				<section>
					<div className="title">
						<h2>Wallet</h2>
					</div>
					<div className="title">
						<h2>Recent Transaction</h2>
						<a>View All</a>
					</div>
					<WalletRecent>
						<div className="header">
							<div>
								<span>Saleh Ahmed</span>
								<span>April 28, 2022 at 11:00</span>
							</div>
							<div>- $435.00</div>
						</div>
						<div>
							<div>
								<span>Delowar Hossain</span>
								<span>April 25, 2022 at 11:00</span>
							</div>
							<div>- $132.00</div>
						</div>
						<div>
							<div>
								<span>Moinul Hasan Nayem</span>
								<span>April 25, 2022 at 11:00</span>
							</div>
							<div>- $826.00</div>
						</div>
						<div>
							<div>
								<span>Dr. Jubed Ahmed</span>
								<span>April 16, 2022 at 11:00</span>
							</div>
							<div>- $435.00</div>
						</div>
						<div>
							<div>
								<span>AR.Jakir Alp</span>
								<span>April 14, 2022 at 11:00</span>
							</div>
							<div>- $228.00</div>
						</div>
					</WalletRecent>
				</section>
			</Styled>
		</AfterLogin>
	);
}
