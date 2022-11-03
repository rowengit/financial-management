import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			text_primary: string;
			text_secondary: string;
			text_third: string;

			border_primary: string;
			border_secondary: string;
			border_third: string;

			button_bg_primary: string;
			button_bg_secondary: string;

			bg_primary: string;
			bg_secondary: string;
			bg_third: string;
			bg_fourth: string;

			gray_1: string;
			gray_2: string;
			gray_3: string;

			status_pending_bg: string;
			status_pending_text: string;

			status_paid_bg: string;
			status_paid_text: string;

			status_unpaid_bg: string;
			status_unpaid_text: string;
		};
	}
}
