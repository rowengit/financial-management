import styled, { css } from "styled-components";
import { Chip, Wifi, MasterCard, Visa } from "@icons";

const Styled = styled.div`
	position: relative;
	width: 280px;
	margin-bottom: 180px;

	> div {
		padding: 18px 30px;
		border-radius: 15px;

		&.black {
			width: 100%;
			background: linear-gradient(
				104.3deg,
				#4a4a49 2.66%,
				#20201f 90.57%
			);
		}

		&.white {
			width: 90%;
			position: absolute;
			bottom: -140px;
			border-radius: 15px;
			left: 14px;
			background: linear-gradient(
				180deg,
				rgba(255, 255, 255, 0.4) 0%,
				rgba(255, 255, 255, 0.1) 100%
			);
			backdrop-filter: blur(5px);

			.mask {
				background: linear-gradient(
					131.66deg,
					#959595 -12.2%,
					#324000 147.88%
				);
				opacity: 0.1;
				height: 196px;
				width: 312px;
				position: absolute;
				left: 0;
				top: 0;
				border-radius: 15px;
			}
		}
	}
`;

const CardContent = styled.div<{ type: "black" | "white" }>`
	> div {
		&:first-child {
			span {
				color: #fff;

				&:first-child {
					margin-right: 8px;
					font-weight: 700;
					font-size: 16px;
					line-height: 23px;
				}

				&:last-child {
					padding: 0 8px;
					font-weight: 500;
					font-size: 12px;

					${p =>
						p.type === "black" &&
						css`
							color: ${p.theme.colors.text_fourth};
						`}

					border-left: 1px solid ${p => p.theme.colors.text_fourth};
				}
			}
		}

		&:nth-child(2) {
			margin: 30px 0 21px 0;
			display: flex;
			justify-content: space-between;
		}

		&:last-child {
			margin-top: 8px;
			display: flex;
			justify-content: space-between;

			span {
				font-weight: 500;
				line-height: 20px;
				letter-spacing: 0.02em;
				color: ${p => p.theme.colors.text_third};
			}
		}
	}

	p {
		font-size: 17px;
		line-height: 24px;
		letter-spacing: 0.1em;
		color: ${p =>
			p.type === "black" ? "#ffffff" : p.theme.colors.text_primary};
	}
`;

export const Card = () => (
	<Styled>
		<div className="black">
			<CardContent type="black">
				<div>
					<span>Maglo.</span>
					<span>Universal Bank</span>
				</div>
				<div>
					<Chip />
					<Wifi />
				</div>
				<p>5495 7381 3759 ****</p>
				<div>
					<span>04/24</span>
					<MasterCard />
				</div>
			</CardContent>
		</div>
		<div className="white">
			<div className="mask"></div>
			<CardContent type="white">
				<div>
					<span>Maglo.</span>
					<span>Commercial Bank</span>
				</div>
				<div>
					<Chip />
					<Wifi />
				</div>
				<p>8595 2548 7312 ****</p>
				<div>
					<span>09/25</span>
					<Visa />
				</div>
			</CardContent>
		</div>
	</Styled>
);
