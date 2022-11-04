import React from "react";
import styled from "styled-components";

const Styled = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	font-weight: 600;
	white-space: nowrap;

	&.action {
		border-radius: 10px;
		font-size: 14px;
		line-height: 40px;
		padding: 0 20px;
	}

	&.full {
		font-size: 16px;
		text-align: center;
		color: ${p => p.theme.colors.text_primary};
		line-height: 48px;
		width: 100%;
		border-radius: 10px;
	}

	&.btn-submit {
		background: ${p => p.theme.colors.button_bg_primary};
	}

	&.btn-secondary {
		border: 1px solid ${props => props.theme.colors.border_third};
	}

	&.add {
		color: ${p => p.theme.colors.button_bg_secondary};
		background: ${p => p.theme.colors.gray_1};
		border: 1px solid ${p => p.theme.colors.border_third};
	}

	&.update {
		color: #fff;
		background: ${p => p.theme.colors.button_bg_secondary};
		border: 1px solid ${p => p.theme.colors.border_third};
	}

	&.cancel {
		background: ${p => p.theme.colors.gray_2};
		border: 1px solid ${p => p.theme.colors.border_third};
	}

	&.edit {
		color: ${p => p.theme.colors.button_bg_secondary};
	}
`;

export const Button = ({
	className,
	children,
	onClick,
	type = "button"
}: {
	className?: string;
	children?: React.ReactNode;
	onClick?: () => void;
	type?: "button";
}) => {
	return (
		<Styled className={className} onClick={onClick} type={type}>
			{children}
		</Styled>
	);
};
