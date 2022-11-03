import { useEffect } from "react";

export const useClickOutside = (ref: any, onClick: any) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target)) {
				onClick();
			}
		};

		document.addEventListener("mousedown", handleClick);
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, [ref, onClick]);
};
