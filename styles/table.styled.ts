import styled, { css } from "styled-components";

export const Table = styled.div<{
	LineHeight: string;
	Striped?: boolean;
	Border?: boolean;
}>`
	width: 100%;
	display: table;
	border-collapse: collapse;

	> div {
		display: table-row;

		&:hover {
			background-color: ${p => p.theme.colors.gray_3};
		}

		${p =>
			p.Border &&
			css`
				&:not(.header) {
					border-bottom: 1px ${p => p.theme.colors.border_third} solid;
				}
			`}

		> div {
			display: table-cell;
			line-height: ${p => p.LineHeight};
			vertical-align: middle;

			&.num {
				text-align: right;
			}

			${p =>
				p.Striped &&
				css`
					&:nth-child(even) {
						color: ${p => p.theme.colors.text_third};
					}
				`}

			&.date {
				span {
					display: block;
					line-height: 14px;
					margin-bottom: 5px;

					&:first-child {
						color: ${p => p.theme.colors.text_primary};
						margin-bottom: 10px;
					}
				}

				p {
					font-weight: 600;
					color: ${p => p.theme.colors.text_primary};
					margin-bottom: 7px;
					+ span {
						color: ${p => p.theme.colors.text_third};
					}
				}
			}

			&.status > span {
				border-radius: 4px;
				padding: 8px 15px;
				&.pending {
					background: ${p => p.theme.colors.status_pending_bg};
					color: ${p => p.theme.colors.status_pending_text};
				}

				&.paid {
					background: ${p => p.theme.colors.status_paid_bg};
					color: ${p => p.theme.colors.status_paid_text};
				}

				&.unpaid {
					background: ${p => p.theme.colors.status_unpaid_bg};
					color: ${p => p.theme.colors.status_unpaid_text};
				}
			}
		}

		&.header {
			> div {
				line-height: 20px;
				padding-bottom: 10px;
				color: ${p => p.theme.colors.text_third};
			}
		}
	}
`;
