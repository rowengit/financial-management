import styled, { css } from "styled-components";

export const InputIcon = styled.div<{
	bg?: boolean;
	border?: boolean;
	width?: "360px";
}>`
	${p =>
		p.bg &&
		css`
			border: ${p.theme.colors.border_third};
			border-radius: 15px;
		`};

	${p =>
		p.width &&
		css`
			width: ${p.width};
		`};

	background: ${p => p.bg && p.theme.colors.border_third};
	display: flex;
	align-items: center;

	svg {
		margin: 12px 15px;
	}
	input {
		border: none;
		background: none;
		width: 100%;
		margin-right: 15px;
		&:focus {
			outline: none;
		}
	}
`;
