import Link from "next/link";
import { Input } from "@components/common/input";
import { CheckBox } from "@components/common/checkbox";
import Google from "@img/icon/google.png";
import styled from "styled-components";
import { Button } from "@components/common/button";
import { BeforeLoginWrapper } from "@wrapper/beforeLogin";
import { useRouter } from "next/router";

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

export default function SignIn() {
	const router = useRouter();
	return (
		<BeforeLoginWrapper>
			<Form>
				<h1>Welcome back</h1>
				<p>Welcome back! Please enter your details</p>
				<div className="input-group">
					<Input title="Email" />
					<Input title="Password" type="password" />
				</div>
				<div>
					<CheckBox
						id="RememberMe"
						displayText="Remember For 30 Days"
					/>
					<a>Forgot Password</a>
				</div>
				<div className="btn-group">
					<Button
						className="btn-submit full"
						onClick={() => router.push("/")}>
						Sign in
					</Button>
					<Button className="btn-secondary full">
						<img src={Google.src} alt="Google" />
						Sign in with google
					</Button>
				</div>
				<div>
					<span>{`Don't have an account?`}</span>
					<Link href={"/signup"}>Sign up for free</Link>
				</div>
			</Form>
		</BeforeLoginWrapper>
	);
}
