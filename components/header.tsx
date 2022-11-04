import styled from "styled-components";
import { Search, Notification } from "@icons";
import avatar from "@img/avatar.png";

const Styled = styled.header`
	position: absolute;
	left: 290px;
	top: 30px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	width: calc(100% - 290px - 40px);

	.right {
		display: flex;
		align-items: center;
	}
`;

const IconList = styled.div`
	margin-right: 48px;
	display: flex;
	gap: 45px;

	svg {
		cursor: pointer;

		&:hover {
			opacity: 0.8;
		}
	}
`;

const UserInfo = styled.div<{ Img: string }>`
	display: flex;
	align-items: center;
	background: ${p => p.theme.colors.bg_secondary};
	padding: 6px 7px;
	border-radius: 100px;
	> div {
		background-image: url(${p => p.Img});
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	span {
		margin-left: 12px;
		margin-right: 7px;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
	}
`;

export const Header = ({ title }: { title: string }) => (
	<Styled>
		<h1>{title}</h1>
		<div className="right">
			<IconList>
				{/* <Search /> */}
				<Notification />
			</IconList>
			<UserInfo Img={avatar.src}>
				<div />
				<span>Mahfuzul Nabil</span>
			</UserInfo>
		</div>
	</Styled>
);
