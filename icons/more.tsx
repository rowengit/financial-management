import styled, { css, DefaultTheme } from "styled-components";

const Styled = styled.svg<{ color?: keyof DefaultTheme["colors"] }>`
	path {
		${p =>
			p.color &&
			css`
				fill: ${p.theme.colors[p.color]};
			`}
	}
`;

export const More = (props?: { color?: keyof DefaultTheme["colors"] }) => (
	<Styled
		color={props?.color}
		width="22"
		height="22"
		viewBox="0 0 22 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_36_667)">
			<path
				d="M4.50033 9.16675C3.48741 9.16675 2.66699 9.98716 2.66699 11.0001C2.66699 12.013 3.48741 12.8334 4.50033 12.8334C5.51324 12.8334 6.33366 12.013 6.33366 11.0001C6.33366 9.98716 5.51324 9.16675 4.50033 9.16675ZM17.5003 9.16675C16.4874 9.16675 15.667 9.98716 15.667 11.0001C15.667 12.013 16.4874 12.8334 17.5003 12.8334C18.5132 12.8334 19.3337 12.013 19.3337 11.0001C19.3337 9.98716 18.5132 9.16675 17.5003 9.16675ZM11.0003 9.16675C9.98741 9.16675 9.16699 9.98716 9.16699 11.0001C9.16699 12.013 9.98741 12.8334 11.0003 12.8334C12.0132 12.8334 12.8337 12.013 12.8337 11.0001C12.8337 9.98716 12.0132 9.16675 11.0003 9.16675Z"
				fill="#929EAE"
			/>
		</g>
		<defs>
			<clipPath id="clip0_36_667">
				<rect width="22" height="22" fill="white" />
			</clipPath>
		</defs>
	</Styled>
);
