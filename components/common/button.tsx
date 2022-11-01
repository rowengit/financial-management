import React from "react";
import styled from "styled-components";

const Styled = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	text-align: center;
	color: ${p => p.theme.colors.text_primary};

	line-height: 48px;
	width: 100%;
	border-radius: 10px;

	&.btn-submit {
		background: ${p => p.theme.colors.button_bg_primary};
	}

	&.btn-secondary {
		border: 1px solid ${props => props.theme.colors.border_third};
	}
`;

export const Button = ({
	className,
	children
}: {
	className: string;

	children?: React.ReactNode;
}) => {
	return <Styled className={className}>{children}</Styled>;
};
