import { Sidebar } from "@components/sidebar";
import { Header } from "@components/header";

export const AfterLogin = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<Sidebar />
			{children}
		</>
	);
};
