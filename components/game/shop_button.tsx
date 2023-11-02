import { ReactElement, useState } from "react";

interface ShopButtonProps {
	className?: string;
	text: string;
	onClick: () => void;
}

export default function ShopButton({
	className,
	text,
	onClick,
}: ShopButtonProps): ReactElement {
	const [isPressed, setIsPressed] = useState(false);

	return (
		<button
			onClick={() => onClick()}
			className={`h-full w-full bg-green-500 ${className} ${
				isPressed ? "translate-y-[2px]" : ""
			}`}
			onPointerUp={(_) => setIsPressed(false)}
			onPointerDown={(_) => setIsPressed(true)}
		>
			{text}
		</button>
	);
}
