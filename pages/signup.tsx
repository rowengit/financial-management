import { Input } from "@components/common/input";
import Google from "@img/icon/google.png";
import styled from "styled-components";
import { Button } from "@components/common/button";
import { BeforeLoginWrapper } from "@components/beforeLogin";
import Link from "next/link";

const Form = styled.form`
	min-width: 404px;

	> h1 {
		margin-bottom: 8px;
	}

	.input-group + div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		a {
			text-align: right;
		}
	}

	> div:last-child {
		text-align: center;
		font-weight: 400;
		color: ${props => props.theme.colors.text_third};

		a {
			margin-left: 5px;
		}
	}
`;

export default function SignUp() {
	return (
		<BeforeLoginWrapper>
			<Form>
				<h1>Create New Account</h1>
				<p>Welcome! Please enter your details</p>
				<div className="input-group">
					<Input title="Full Name" />
					<Input title="Email" />
					<Input title="Password" type="password" />
				</div>
				<div className="btn-group">
					<Button className="btn-submit">Create Account</Button>
					<Button className="btn-secondary">
						<img src={Google.src} />
						Sign up with google
					</Button>
				</div>
				<div>
					<span>Already have an account?</span>
					<Link href={"/signin"}>Sign in</Link>
				</div>
			</Form>
		</BeforeLoginWrapper>
	);
}
