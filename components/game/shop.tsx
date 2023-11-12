import { ReactElement, useState, useContext, useRef } from "react";
import { ChevronLeft } from "@geist-ui/icons";
import { useOnClickOutside } from "usehooks-ts";

import ShopButton from "@components/game/shop_button";
import ShopView from "@components/game/shop_view";
import StatsView from "@components/game/stats_view";
import ShopContext from "@utilities/shop_context";
import useMediaQuery from "@utilities/use_media_query";

export default function Shop(): ReactElement {
	const { collapsedShop, setCollapsedShop } = useContext(ShopContext);

	const [showShopView, setShowShopView] = useState(true);
	const ref = useRef<HTMLDivElement | null>(null);
	const match = useMediaQuery("(max-width: 1279px)");

	useOnClickOutside(ref, () => setCollapsedShop(true));

	return (
		<section
			className={`sm:min-w-1/2 pointer-events-none absolute top-1/2 z-20 flex h-[30rem] w-full -translate-y-1/2 flex-row transition-transform duration-700 ease-in-out sm:w-[25rem] xl:static xl:h-[66%] xl:w-[35rem] xl:translate-y-0 3xl:w-[50rem] ${
				collapsedShop && match
					? "translate-x-[calc(-100vw+4rem)] sm:translate-x-[-20rem]"
					: ""
			}`}
		>
			<div className="pointer-events-auto flex w-full flex-col items-center justify-center">
				<div className="flex w-full flex-1 flex-row items-center justify-around text-xl sm:text-2xl 3xl:text-4xl">
					<ShopButton
						text="Shop"
						onClick={() => setShowShopView(true)}
						className={`${
							showShopView
								? "bg-green-600 shadow-inner shadow-green-800"
								: ""
						}`}
					/>
					<ShopButton
						text="Stats"
						onClick={() => setShowShopView(false)}
						className={`rounded-tr-lg ${
							showShopView
								? ""
								: "bg-green-600 shadow-inner shadow-green-800"
						}`}
					/>
				</div>

				<div className="w-full flex-[5] overflow-auto rounded-br-lg bg-brown-700 text-white">
					{showShopView ? <ShopView /> : <StatsView />}
				</div>
			</div>

			<div className="pointer-events-none flex h-full items-center xl:hidden">
				<button
					className="pointer-events-auto h-16 w-16 sm:h-20 sm:w-20"
					onClick={() => setCollapsedShop(!collapsedShop)}
				>
					<ChevronLeft
						className={`h-full w-full transition-transform duration-700 ease-in-out ${
							collapsedShop ? "rotate-180" : ""
						}`}
					/>
				</button>
			</div>
		</section>
	);
}
