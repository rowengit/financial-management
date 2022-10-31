import logo from "@img/logo.png";
import { Input } from "@components/common/input";
import { CheckBox } from "@components/common/checkbox";
import Google from "@img/icon/google.png";
import styled from "styled-components";
import saving from "@img/saving.png";

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

			> span {
				font-weight: 400;
				font-size: 14px;
				line-height: 17px;
				color: #929eae;

				a {
					color: #1b212d;
				}
			}

			.input-group {
				margin-top: 25px;
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

					color: #1b212d;
				}
			}

			.btn-group {
				margin: 25px 0;

				button {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 9px;

					font-weight: 600;
					font-size: 16px;
					line-height: 20px;
					text-align: center;
					color: #1b212d;

					line-height: 48px;
					width: 100%;
				}

				.submit {
					background: #c8ee44;
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
						<button className="submit">Sign in</button>
						<button>
							<img src={Google.src} />
							Sign in with google
						</button>
					</div>
					<span>
						Don't have an account? <a>Sign up for free</a>
					</span>
				</form>
			</section>
			<div className="saving" />
		</Main>
	);
}
