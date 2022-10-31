import styled from "styled-components";

const Wrapper = styled.div`
	margin: 15px 0;

	label {
		display: block;
		margin-bottom: 10px;
	}

	input {
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
		color: #78778b;

		width: calc(100% - 30px);

		border: 1px #f2f2f2 solid;
		border-radius: 10px;
		padding: 10px 15px;
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
