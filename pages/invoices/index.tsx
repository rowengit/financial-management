import styled from "styled-components";
import { Search, More, Receipt, Filter } from "@icons";
import { Button } from "@components/common/button";
import { AfterLogin } from "@wrapper/afterLogin";
import { Table } from "@styles/table.styled";
import { InputIcon } from "@styles/inputIcon.styled";

const Styled = styled.main`
	> div {
		padding-bottom: 25px;
		margin-bottom: 25px;
		border-bottom: 1px ${p => p.theme.colors.border_third} solid;

		&:first-child {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 30px;

			.btn-bar {
				display: flex;
				gap: 30px;
				height: 48px;
			}
		}
	}
`;

export default function Invoices() {
	return (
		<AfterLogin title="Invoices">
			<Styled>
				<div>
					<InputIcon bg={true} border={true} width="360px">
						<Search />
						<input placeholder="Search anything on Invoices" />
					</InputIcon>
					<div className="btn-bar">
						<Button className="btn-submit action">
							<Receipt />
							Create Invoice
						</Button>
						<Button className="btn-secondary action">
							<Filter />
							Filters
						</Button>
					</div>
				</div>
				<Table LineHeight="60px" Striped={true} Border={true}>
					<div className="header">
						<div>NAME/CLIENT</div>
						<div>DATE</div>
						<div>ORDERS/TYPE</div>
						<div>AMOUNT</div>
						<div>STATUS</div>
						<div>ACTION</div>
					</div>
					<div>
						<div>Gadget Gallery LTD</div>
						<div className="date">
							<span>14 Apr 2022</span>
							<span>at 8:00 PM</span>
						</div>
						<div>20</div>
						<div>$420.84</div>
						<div className="status">
							<span className="pending">Pending</span>
						</div>
						<div>
							<Button className="action icon">
								<More color={"button_bg_secondary"} />
							</Button>
						</div>
					</div>
					<div>
						<div>Gadget Gallery LTD</div>
						<div className="date">
							<span>14 Apr 2022</span>
							<span>at 8:00 PM</span>
						</div>
						<div>20</div>
						<div>$420.84</div>
						<div className="status">
							<span className="paid">Paid</span>
						</div>
						<div>
							<Button className="action icon">
								<More color={"button_bg_secondary"} />
							</Button>
						</div>
					</div>
					<div>
						<div>Gadget Gallery LTD</div>
						<div className="date">
							<span>14 Apr 2022</span>
							<span>at 8:00 PM</span>
						</div>
						<div>20</div>
						<div>$420.84</div>
						<div className="status">
							<span className="unpaid">Unpaid</span>
						</div>
						<div>
							<Button className="action icon">
								<More color={"button_bg_secondary"} />
							</Button>
						</div>
					</div>
					<div>
						<div>Gadget Gallery LTD</div>
						<div className="date">
							<span>14 Apr 2022</span>
							<span>at 8:00 PM</span>
						</div>
						<div>20</div>
						<div>$420.84</div>
						<div className="status">
							<span className="paid">Paid</span>
						</div>
						<div>
							<Button className="action icon">
								<More color={"button_bg_secondary"} />
							</Button>
						</div>
					</div>
					<div>
						<div>Gadget Gallery LTD</div>
						<div className="date">
							<span>14 Apr 2022</span>
							<span>at 8:00 PM</span>
						</div>
						<div>20</div>
						<div>$420.84</div>
						<div className="status">
							<span className="paid">Paid</span>
						</div>
						<div>
							<Button className="action icon">
								<More color={"button_bg_secondary"} />
							</Button>
						</div>
					</div>
					<div>
						<div>Gadget Gallery LTD</div>
						<div className="date">
							<span>14 Apr 2022</span>
							<span>at 8:00 PM</span>
						</div>
						<div>20</div>
						<div>$420.84</div>
						<div className="status">
							<span className="unpaid">Unpaid</span>
						</div>
						<div>
							<Button className="action icon">
								<More color={"button_bg_secondary"} />
							</Button>
						</div>
					</div>
					<div>
						<div>Gadget Gallery LTD</div>
						<div className="date">
							<span>14 Apr 2022</span>
							<span>at 8:00 PM</span>
						</div>
						<div>20</div>
						<div>$420.84</div>
						<div className="status">
							<span className="pending">Pending</span>
						</div>
						<div>
							<Button className="action icon">
								<More color={"button_bg_secondary"} />
							</Button>
						</div>
					</div>
					<div>
						<div>Gadget Gallery LTD</div>
						<div className="date">
							<span>14 Apr 2022</span>
							<span>at 8:00 PM</span>
						</div>
						<div>20</div>
						<div>$420.84</div>
						<div className="status">
							<span className="pending">Pending</span>
						</div>
						<div>
							<Button className="action icon">
								<More color={"button_bg_secondary"} />
							</Button>
						</div>
					</div>
				</Table>
			</Styled>
		</AfterLogin>
	);
}
