import logo from "@img/logo.png";
import { Input } from "@components/common/input";
import { CheckBox } from "@components/common/checkbox";
import Google from "@img/icon/google.png";
import styled from "styled-components";
import saving from "@img/saving.png";
import { Button } from "@components/common/button";

const Main = styled.main`
	display: flex;
	justify-content: space-between;
	> section {
		margin: auto;
		height: 100%;

		> img {
			position: absolute;
			top: 40px;
		}

		> form {
			min-width: 404px;

			> h1 {
				margin-bottom: 8px;
			}

			.input-group + div {
				display: flex;
				justify-content: space-between;
				align-items: center;

				a {
					font-weight: 500;
					font-size: 14px;
					line-height: 17px;
					text-align: right;
				}
			}

			> div:last-child {
				text-align: center;
				font-weight: 400;
				font-size: 14px;
				line-height: 17px;
				color: ${props => props.theme.colors.text_third};

				a {
					margin-left: 5px;
				}
			}
		}
	}

	.saving {
		background-image: url(${saving.src});
		height: 100vh;
		width: 675px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
`;

export default function SignIn() {
	return (
		<Main>
			<section>
				<img src={logo.src} alt="Maglo. Logo" />
				<form>
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
						<Button className="btn-submit">Sign in</Button>
						<Button className="btn-secondary">
							<img src={Google.src} />
							Sign in with google
						</Button>
					</div>
					<div>
						<span>Don't have an account?</span>
						<a>Sign up for free</a>
					</div>
				</form>
			</section>
			<div className="saving" />
		</Main>
	);
}
