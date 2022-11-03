import { Sidebar } from "@components/sidebar";
import { Header } from "@components/header";
import styled from "styled-components";

const Styled = styled.div`
	display: flex;
	position: relative;

	main {
		width: calc(100% - 330px);
		margin-top: 108px;
		margin-left: 40px;
		padding-bottom: 30px;
	}
`;

export const AfterLogin = ({
	children,
	title
}: {
	children: React.ReactNode;
	title: string;
}) => {
	return (
		<Styled>
			<Header title={title} />
			<Sidebar />
			{children}
		</Styled>
	);
};
