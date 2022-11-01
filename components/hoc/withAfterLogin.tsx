import { AfterLogin } from "@wrapper/afterLogin";

export const withAfterLogin = (Component: any) => {
	const AuthenticatedComponent = (props: any) => {
		return (
			<AfterLogin>
				<Component {...props} />
			</AfterLogin>
		);
	};

	return AuthenticatedComponent;
};
