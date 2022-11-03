import styled from "styled-components";

export const InputIcon = styled.div`
	border-radius: 15px;
	width: 360px;
	background: ${p => p.theme.colors.border_third};
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
