import styled, { css } from "styled-components";

const Wrapper = styled.div<{ Disabled?: boolean }>`
	margin: 15px 0;
	min-width: 200px;
	width: 100%;

	label {
		display: block;
		margin-bottom: 10px;
	}

	input {
		color: ${p => p.theme.colors.text_secondary};
		width: calc(100% - 32px);

		border: 1px ${p => p.theme.colors.border_secondary} solid;
		border-radius: 10px;
		padding: 10px 15px;

		&:focus {
			outline: 2px solid ${p => p.theme.colors.button_bg_secondary};
		}

		&[type="password"] {
			font-family: Verdana;
			letter-spacing: 0.125em;
		}
	}

	${p =>
		p.Disabled &&
		css`
			input {
				&:disabled {
					border: none;
					background: none;
					padding: 10px 0px;
					color: ${p => p.theme.colors.text_secondary};
				}
			}
		`}
`;

export const Input = ({
	title,
	placeHolder,
	type = "text",
	disabled
}: {
	title: string;
	placeHolder?: string;
	type?: "text" | "password" | "date";
	disabled?: boolean;
}) => {
	return (
		<Wrapper Disabled={disabled}>
			<label>{title}</label>
			<input placeholder={placeHolder} type={type} disabled={disabled} />
		</Wrapper>
	);
};
