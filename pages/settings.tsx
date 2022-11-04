import { useState } from "react";
import { AfterLogin } from "@wrapper/afterLogin";
import styled from "styled-components";
import { Button } from "@common/button";
import { Input } from "@common/input";
import { InputIcon } from "@common/inputIcon";
import { Edit, Calendar, Lock, Email } from "@icons";

const Styled = styled.main`
	> div {
		display: flex;
		justify-content: space-between;
	}
	form {
		.row {
			display: flex;
			width: 100%;
			gap: 41px;
		}

		.btn-group {
			display: flex;
			justify-content: end;
		}
	}
`;

export default function Settings() {
	const [viewOnly, setViewOnly] = useState(true);
	return (
		<AfterLogin title="Settings">
			<Styled>
				<div>
					<div className="title">
						<h2>Account Information</h2>
					</div>
					<Button className="edit" onClick={() => setViewOnly(false)}>
						<Edit />
						Edit
					</Button>
				</div>
				<form>
					<div className="row">
						<Input
							title="First Name"
							placeHolder="Mahfuzul Islam"
							disabled={viewOnly}
						/>
						<Input
							title="Last Name"
							placeHolder="Nabil"
							disabled={viewOnly}
						/>
					</div>
					<div className="row">
						<InputIcon
							title="Date of Birth"
							placeHolder="27/09/1998"
							type="date"
							value="1998-09-27"
							disabled={viewOnly}
							icon={{ right: <Calendar /> }}
						/>
						<Input
							title="Mobile Number"
							placeHolder="+123 456 7890"
							disabled={viewOnly}
						/>
					</div>

					<InputIcon
						title="Email"
						placeHolder="HelloMahfuzul@gmail.com"
						icon={{ left: <Email /> }}
						disabled={viewOnly}
					/>

					{!viewOnly && (
						<>
							<div className="row">
								<InputIcon
									title="New Password"
									type="password"
									icon={{ left: <Lock /> }}
								/>

								<InputIcon
									title="Confirm Password"
									type="password"
									icon={{ left: <Lock /> }}
								/>
							</div>
							<div className="btn-group">
								<Button
									className="update action"
									onClick={() => setViewOnly(true)}>
									Update
								</Button>
								<Button
									className="cancel action"
									onClick={() => setViewOnly(true)}>
									Cancel
								</Button>
							</div>
						</>
					)}
				</form>
			</Styled>
		</AfterLogin>
	);
}
