import styled from "styled-components";
import { Search } from "@icons";
import { Button } from "@components/common/button";
import { AfterLogin } from "@wrapper/afterLogin";
import { Table } from "@styles/table.styled";
import { InputIcon } from "@styles/inputIcon.styled";

const Styled = styled.main`
	> div {
		border-bottom: 1px ${p => p.theme.colors.border_third} solid;
		margin-bottom: 25px;
		padding-bottom: 25px;
	}
`;

export default function Transaction() {
	const arr = new Array(20);
	arr.fill(0);

	return (
		<AfterLogin title="Transaction">
			<Styled>
				<div>
					<InputIcon>
						<Search />
						<input placeholder="Search anything on Transactions" />
					</InputIcon>
				</div>
				<Table LineHeight="60px">
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
		<div className="date">
			<span>14 Apr 2022</span>
			<span>at 8:00 PM</span>
		</div>
		<div>INVOICE ID</div>
		<div>
			<Button className="btn-submit action">View</Button>
		</div>
	</div>
);
