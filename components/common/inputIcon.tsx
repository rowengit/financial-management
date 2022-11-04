import styled, { css } from "styled-components";

const Styled = styled.div<{ Error?: boolean; Disabled?: boolean }>`
	width: 100%;
	margin: 15px 0;
	${p =>
		p.Error &&
		css`
			label {
				color: ${p => p.theme.colors.error};
			}
		`}

	> p {
		display: none;
		&.error {
			display: block;
			color: ${p => p.theme.colors.error};
			font-size: 14px;
		}
	}

	> div {
		min-width: 200px;
		margin-top: 10px;
		display: flex;
		border: 1px solid
			${p =>
				p.Error ? p.theme.colors.error : p.theme.colors.border_third};
		border-radius: 10px;
		position: relative;

		svg {
			position: absolute;
			margin: 12px;
			top: -3px;
			&:last-child {
				top: -1px;
				right: 0;
				pointer-events: none;
			}
		}

		svg + input {
			padding-left: 42px;
		}

		input {
			border: none;
			background: none;
			width: 100%;
			padding: 10px 15px;
			color: ${p => p.theme.colors.text_secondary};

			&:focus {
				outline: none;
			}

			&[type="date"]::-webkit-inner-spin-button {
				display: none;
			}

			&[type="date"]::-webkit-calendar-picker-indicator {
				opacity: 0;
			}

			&[type="password"] {
				letter-spacing: 0.2em;
			}

			&::-webkit-calendar-picker-indicator {
				position: absolute;
				right: 0;
				width: 100%;
				height: 100%;
				cursor: pointer;
			}
		}

		${p =>
			p.Disabled &&
			css`
				border: none;

				svg {
					display: none;
				}

				input {
					padding: 10px 0;

					&:disabled {
						color: ${p => p.theme.colors.text_secondary};
					}
				}
			`}
	}
`;

export const InputIcon = ({
	title,
	placeHolder,
	type = "text",
	icon,
	error,
	disabled,
	value = ""
}: {
	title: string;
	placeHolder?: string;
	type?: "text" | "password" | "date";
	icon?: {
		right?: React.ReactNode;
		left?: React.ReactNode;
	};
	error?: boolean;
	disabled?: boolean;
	value?: string;
}) => (
	<Styled Error={error} Disabled={disabled}>
		<label>{title}</label>
		<div>
			{!disabled && icon?.left}
			<input
				placeholder={placeHolder}
				type={type}
				disabled={disabled}
				value={value}
			/>
			{!disabled && icon?.right}
		</div>
		<p className={error ? "error" : ""}>Oops!</p>
	</Styled>
);
