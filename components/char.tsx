import React, { useState, useRef } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import styled from "styled-components";
import { Down } from "@icons";
import { useClickOutside } from "@hooks/useClickOutside";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false
		},
		title: {
			display: false
		}
	}
};

const labels = [
	"Apr 14",
	"Apr 15",
	"Apr 16",
	"Apr 17",
	"Apr 18",
	"Apr 19",
	"Apr 20"
];

export const data = {
	labels,
	datasets: [
		{
			label: "Income",
			data: labels.map(() =>
				faker.datatype.number({ min: -1000, max: 2000 })
			),
			borderColor: "#29a073",
			backgroundColor: "#29a073"
		},
		{
			label: "Expense",
			data: labels.map(() =>
				faker.datatype.number({ min: -200, max: 500 })
			),
			borderColor: "#C8EE44",
			backgroundColor: "#C8EE44"
		}
	]
};

const Styled = styled.div`
	padding: 19px 20px;
	border: 1px ${p => p.theme.colors.border_third} solid;
	border-radius: 10px;
	h2 {
		font-weight: 600;
		font-size: 18px;
		line-height: 22px;
		color: ${p => p.theme.colors.text_primary};
	}

	div,
	ul {
		display: flex;
		align-items: center;
	}

	> div {
		justify-content: space-between;
		margin-bottom: 30px;
	}

	.right {
		width: 50%;
		justify-content: space-between;

		ul {
			gap: 20px;
			li {
				display: flex;
				align-items: center;
				gap: 9px;
				span {
					width: 8px;
					height: 8px;
					display: block;
					border-radius: 100%;

					&.income {
						background: ${p => p.theme.colors.button_bg_secondary};
					}

					&.expense {
						background: ${p => p.theme.colors.button_bg_primary};
					}
				}
			}
		}

		.dropdown {
			position: relative;
			> div {
				background: ${p => p.theme.colors.gray_1};
				height: 30px;
				padding: 0 10px;
				border-radius: 5px;
				cursor: pointer;

				span {
					white-space: nowrap;
				}

				svg {
					margin-left: 10px;
				}
			}

			ul {
				display: none;
				width: calc(100% - 20px);
			}

			&.active {
				ul {
					display: initial;
					position: absolute;
					top: 40px;
					background: #fff;
					border: 1px ${p => p.theme.colors.border_secondary} solid;
					padding: 10px;
					border-radius: 5px;

					li {
						line-height: 32px;

						&:hover {
							color: ${p => p.theme.colors.button_bg_secondary};
							font-weight: 700;
						}
					}
				}
			}
		}
	}
`;

export const Char = () => {
	const [open, isOpen] = useState(false);

	const ref = useRef(null);
	useClickOutside(ref, () => isOpen(false));
	return (
		<Styled>
			<div>
				<h2>Working Capital</h2>
				<div className="right">
					<ul>
						<li>
							<span className="income" />
							Income
						</li>
						<li>
							<span className="expense" />
							Expense
						</li>
					</ul>
					<div
						className={`dropdown${open ? " active" : ""}`}
						ref={ref}>
						<div onClick={() => isOpen(prev => !prev)}>
							<span>Last 7 Days</span>
							<Down />
						</div>
						<ul onClick={() => isOpen(false)}>
							<li>Last 7 Days</li>
							<li>Last 30 Days</li>
							<li>Last 90 Days</li>
						</ul>
					</div>
				</div>
			</div>
			<Line options={options} data={data} />
		</Styled>
	);
};
