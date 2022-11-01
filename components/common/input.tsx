import styled from "styled-components";

const Wrapper = styled.div`
	margin: 15px 0;

	label {
		display: block;
		margin-bottom: 10px;
	}

	input {
		color: ${p => p.theme.colors.text_secondary};
		width: calc(100% - 30px);

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
`;

export const Input = ({
	title,
	placeHolder,
	type = "text"
}: {
	title: string;
	placeHolder?: string;
	type?: "text" | "password";
}) => {
	return (
		<Wrapper>
			<label>{title}</label>
			<input placeholder={placeHolder} type={type} />
		</Wrapper>
	);
};
