import type { AppProps } from "next/app";
import { Wrapper } from "@components/wrapper";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Wrapper>
			<Component {...pageProps} />
		</Wrapper>
	);
}
