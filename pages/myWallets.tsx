import styled from "styled-components";
import { AfterLogin } from "@wrapper/afterLogin";
import { Card } from "@common/card";

const Styled = styled.main`
	display: flex;
	gap: 80px;
	.left {
	}

	.right {
		width: 100%;
	}
`;

export default function MyWallets() {
	return (
		<AfterLogin title="My Wallets">
			<Styled>
				<div className="left">
					<Card />
				</div>
				<div className="right">Hello</div>
			</Styled>
		</AfterLogin>
	);
}
