import { useState } from "react";
import styled from "styled-components";
import { AfterLogin } from "@wrapper/afterLogin";
import { Card } from "@common/card";
import { ArrowUp } from "@icons/arrowUp";
import { ArrowDown } from "@icons/arrowDown";
import { Button } from "@common/button";
import { Plus, Search } from "@icons";
import { InputIcon } from "@styles/inputIcon.styled";
import { Table } from "@styles/table.styled";

const Styled = styled.main`
	display: flex;
	gap: 80px;
	.left {
		.balance {
			width: 290px;
			background: ${p => p.theme.colors.bg_secondary};
			border-radius: 10px;
			padding: 0 25px;

			margin-bottom: 30px;

			h3 {
				color: ${p => p.theme.colors.text_third};
				margin-bottom: 8px;
			}

			> div {
				padding: 25px 0;

				&:first-child {
					div {
						display: flex;
						align-items: center;
					}

					> div {
						display: grid;
						grid-template-columns: repeat(2, 1fr);
						justify-content: space-between;
					}

					.status {
						gap: 17px;
						svg {
							margin-right: 5px;
						}
					}
				}

				&:last-child {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
				}

				.num {
					font-weight: 600;
					font-size: 20px;
					line-height: 25px;
				}

				&:not(:last-child) {
					border-bottom: 1px solid ${p => p.theme.colors.border_third};
				}
			}
		}
	}

	.right {
		width: 600px;

		> section {
			margin-bottom: 30px;
			> p {
				margin: 15px 0 5px 0;
			}
		}

		.tab {
			position: relative;
			ul {
				position: relative;
				width: 100%;
				display: flex;
				gap: 34px;
				border-bottom: 1px solid ${p => p.theme.colors.border_third};
				li {
					padding-bottom: 10px;
					color: ${p => p.theme.colors.text_third};
					border-bottom: 3px solid rgba(41, 160, 115, 0);
					transition: all 0.25s linear;
					&.active {
						color: ${p => p.theme.colors.text_primary};
						border-bottom: 3px solid
							${p => p.theme.colors.button_bg_secondary};
					}
				}
			}

			> div {
				position: absolute;
				top: -15px;
				right: 0;
			}
		}
	}
`;

export default function MyWallets() {
	const [tab, setTab] = useState<"all" | "regular">("all");
	return (
		<AfterLogin title="My Wallets">
			<Styled>
				<div className="left">
					<Card />
					<div className="balance">
						<div>
							<h3>Your Balance</h3>
							<div>
								<span className="num">$5240.00</span>
								<div className="status">
									<div>
										<ArrowUp />
										<span className="up">23.65%</span>
									</div>
									<div>
										<ArrowDown />
										<span className="down">10.40%</span>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div>
								<h3>Currency</h3>
								<span>USD / US Dollar</span>
							</div>
							<div>
								<h3>Status</h3>
								<span>Active</span>
							</div>
						</div>
					</div>
					<Button className="btn-secondary full add">
						<Plus />
						Add New Card
					</Button>
				</div>
				<div className="right">
					<div className="title">
						<h2>My Payments</h2>
					</div>
					<div className="tab">
						<ul>
							<li
								className={tab === "all" ? "active" : ""}
								onClick={() => setTab("all")}>
								All Payments
							</li>
							<li
								className={tab === "regular" ? "active" : ""}
								onClick={() => setTab("regular")}>
								Regular Payments
							</li>
						</ul>
						<InputIcon>
							<Search />
							<input placeholder="Search" />
						</InputIcon>
					</div>
					<section>
						<p>Today</p>
						<Table LineHeight="68px">
							<div>
								<div className="date">
									<p>Payoneer</p>
									<span>20 Apr 2022, 06:55 PM</span>
								</div>
								<div className="num">+ $4,800.24</div>
							</div>
							<div>
								<div className="date">
									<p>Remitly</p>
									<span>18 Apr 2022, 08:58 PM</span>
								</div>
								<div className="num">- $1,800.24</div>
							</div>
							<div>
								<div className="date">
									<p>Wise</p>
									<span>15 Apr 2022, 02:55 AM</span>
								</div>
								<div className="num">- $24.32</div>
							</div>
							<div>
								<div className="date">
									<p>Paypal</p>
									<span>14 Apr 2022, 07:40 PM</span>
								</div>
								<div className="num">- $400.32</div>
							</div>
						</Table>
					</section>

					<section>
						<div className="title">
							<h2>Upcoming Payments</h2>
						</div>
						<p>Next Month</p>
						<Table LineHeight="68px">
							<div>
								<div className="date">
									<p>Facebook Ads</p>
									<span>20 Apr 2022, 06:55 PM</span>
								</div>
								<div className="num">$400.00</div>
							</div>
							<div>
								<div className="date">
									<p>Linkedin Ads</p>
									<span>18 Apr 2022, 08:58 PM</span>
								</div>
								<div className="num">$200.50</div>
							</div>
						</Table>
					</section>
				</div>
			</Styled>
		</AfterLogin>
	);
}
