import { Sidebar } from "@components/sidebar";
import { Header } from "@components/header";
import styled from "styled-components";

const Styled = styled.div`
	display: flex;
	position: relative;
`;

export const AfterLogin = ({ children }: { children: React.ReactNode }) => {
	return (
		<Styled>
			<Header />
			<Sidebar />
			{children}
		</Styled>
	);
};
