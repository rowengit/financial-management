import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	input {
		width: 16px;
		height: 16px;
		border-radius: 4px;
		border: 1px solid #929eae;
		text-align: center;
		line-height: 16px;

		&:checked {
			background-color: #29a073;
			border: 1px solid #29a073;

			accent-color: #29a073;

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
