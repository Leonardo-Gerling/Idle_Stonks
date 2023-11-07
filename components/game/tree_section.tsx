import { ReactElement, useContext } from "react";
import Image from "next/image";
import { abbreviateNumber } from "js-abbreviation-number";

import ShopContext from "@utilities/shop_context";
import useAppleGame from "@utilities/use_apple_game";

export default function TreeSection({
	className,
}: {
	className?: string;
}): ReactElement {
	const {
		currentApples,
		cumulApples,
		changePerClick,
		setCurrentApples,
		setCumulApples,
	} = useContext(ShopContext);

	useAppleGame();

	return (
		<section
			aria-label="tree-section"
			className={
				"unselectable flex flex-col mx-auto px-6 pt-4 items-center justify-end h-[85%] w-full " +
				className
			}
		>
			<button
				className="flex h-full w-full justify-center"
				onClick={() => {
					setCurrentApples(currentApples + changePerClick + 100000);
					setCumulApples(cumulApples + changePerClick + 100000);
				}}
			>
				<Image
					src="/apple_tree.png"
					width={512}
					height={512}
					priority={true}
					alt="Apple Tree"
					className="undraggable h-full max-h-[60vh] w-full max-w-[60vh] object-contain object-bottom"
				/>
			</button>

			<p className="mt-10 rounded-3xl bg-green-500 px-4 py-2 text-center text-3xl text-white md:px-8 md:py-4 md:text-4xl">
				{abbreviateNumber(Math.floor(currentApples))} Apples
			</p>
		</section>
	);
}
