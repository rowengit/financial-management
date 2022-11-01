import { withAfterLogin } from "@components/hoc/withAfterLogin";

function Dashboard() {
	return <main>Dashboard</main>;
}

export default withAfterLogin(Dashboard);
