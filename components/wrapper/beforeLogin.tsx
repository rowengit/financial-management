import { Logo } from "@components/common/logo";
import styled from "styled-components";
import saving from "@img/saving.png";

const Styled = styled.main`
	display: flex;
	justify-content: space-between;
	> section {
		margin: auto;
		height: 100%;

		> img {
			position: absolute;
			top: 40px;
		}
	}

	.saving {
		background-image: url(${saving.src});
		height: 100vh;
		width: 675px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
`;

export function BeforeLoginWrapper({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<Styled>
			<section>
				<Logo />
				{children}
			</section>
			<div className="saving" />
		</Styled>
	);
}
