import { ReactElement } from "react";

interface SaveButtonProps {
	text: string;
	ariaLabel: string;
	icon: ReactElement;
	customOnClick: () => void;
}

export default function SaveButton({
	text,
	ariaLabel,
	icon,
	customOnClick,
}: SaveButtonProps): ReactElement {
	return (
		<button
			aria-label={ariaLabel}
			onClick={() => customOnClick()}
			className="flex flex-row items-center gap-1 rounded-md bg-brown-600 px-3 py-1 font-normal text-white hover:bg-brown-700 sm:px-4 sm:py-2 sm:text-xl 3xl:px-8 3xl:py-5 3xl:text-3xl"
		>
			<span className="hidden xs:block">{icon}</span>
			<span>{text}</span>
		</button>
	);
}
