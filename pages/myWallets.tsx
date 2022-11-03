import styled from "styled-components";
import { AfterLogin } from "@wrapper/afterLogin";
import { Card } from "@common/card";
import { ArrowUp } from "@icons/arrowUp";
import { ArrowDown } from "@icons/arrowDown";
import { Button } from "@common/button";
import { Plus, Search } from "@icons";
import { InputIcon } from "@styles/inputIcon.styled";

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
		width: 100%;

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
							<li className="active">All Payments</li>
							<li>Regular Payments</li>
						</ul>
						<InputIcon>
							<Search />
							<input placeholder="Search" />
						</InputIcon>
					</div>
					<div className="title">
						<h2>Upcoming Payments</h2>
					</div>
				</div>
			</Styled>
		</AfterLogin>
	);
}
