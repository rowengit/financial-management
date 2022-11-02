import { Sidebar } from "@components/sidebar";
import { Header } from "@components/header";
import styled from "styled-components";

const Styled = styled.div`
	display: flex;
	position: relative;

	main {
		margin-top: 108px;
		margin-left: 40px;
	}
`;

export const AfterLogin = ({ children }: { children: React.ReactNode }) => {
	return (
		<Styled>
			<Header title="Dashboard" />
			<Sidebar />
			{children}
		</Styled>
	);
};
