import styled from "styled-components";
import { Search } from "@icons";
import { Button } from "@components/common/button";
import { AfterLogin } from "@wrapper/afterLogin";

const Styled = styled.main`
	> div {
		border-bottom: 1px ${p => p.theme.colors.border_third} solid;
		margin-bottom: 25px;

		.ipt-icon {
			border-radius: 15px;
			width: 30%;
			background: ${p => p.theme.colors.border_third};
			display: flex;
			align-items: center;
			margin-bottom: 25px;
			svg {
				margin: 12px 15px;
			}
			input {
				border: none;
				background: none;
				width: 100%;
				margin-right: 15px;
				&:focus {
					outline: none;
				}
			}
		}
	}
`;

const Table = styled.div`
	width: 100%;
	display: table;
	border-collapse: collapse;

	> div {
		display: table-row;
		&:not(:first-child) {
			border-bottom: 1px ${p => p.theme.colors.border_third} solid;
		}

		> div {
			display: table-cell;
			line-height: 60px;

			&:nth-child(even) {
				color: ${p => p.theme.colors.text_third};
			}
		}

		&:first-child {
			> div {
				line-height: 20px;
				padding-bottom: 10px;
				color: ${p => p.theme.colors.text_third};
			}
		}
	}
`;

export default function Transaction() {
	const arr = new Array(20);
	arr.fill(0);

	return (
		<AfterLogin title="Transaction">
			<Styled>
				<div>
					<div className="ipt-icon">
						<Search />
						<input placeholder="Search anything on Transactions" />
					</div>
				</div>
				<Table>
					<div>
						<div>NAME/BUSINESS</div>
						<div>TYPE</div>
						<div>AMOUNT</div>
						<div>DATE</div>
						<div>INVOICE ID</div>
						<div>ACTION</div>
					</div>
					{arr.map((r, rIdx) => (
						<TableRow key={rIdx} />
					))}
				</Table>
			</Styled>
		</AfterLogin>
	);
}

const TableRow = () => (
	<div>
		<div>Iphone 13 Pro MAX</div>
		<div>Mobile</div>
		<div>$420.84</div>
		<div>
			<span>14 Apr 2022</span>
			<span>14 Apr 2022</span>
		</div>
		<div>INVOICE ID</div>
		<div>
			<Button className="btn-submit action">View</Button>
		</div>
	</div>
);
