import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	input {
		width: 16px;
		height: 16px;
		border-radius: 4px;
		border: 1px solid ${p => p.theme.colors.border_primary};
		text-align: center;
		line-height: 16px;

		&:checked {
			background-color: ${p => p.theme.colors.button_bg_secondary};
			border: 1px solid ${p => p.theme.colors.button_bg_secondary};

			accent-color: ${p => p.theme.colors.button_bg_secondary};

			&:after {
				content: "✓";
				color: #fff;
			}
		}

		cursor: pointer;
	}

	label {
		user-select: none;
		cursor: pointer;
		line-height: 16px;
		margin-left: 9px;
	}
`;

export const CheckBox = ({
	displayText,
	id
}: {
	displayText: string;
	id: string;
}) => {
	return (
		<Wrapper>
			<input type="checkbox" id={id} />
			<label htmlFor={id}>{displayText}</label>
		</Wrapper>
	);
};
