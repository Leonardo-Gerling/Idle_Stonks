import { ReactElement, useState, useContext, useRef } from "react";
import { ChevronLeft } from "@geist-ui/icons";
import { useOnClickOutside } from "usehooks-ts";

import ShopButton from "@components/game/shop_button";
import ShopView from "@components/game/shop_view";
import StatsView from "@components/game/stats_view";
import ShopContext from "@utilities/shop_context";

export default function Shop(): ReactElement {
	const { collapsedShop, setCollapsedShop } = useContext(ShopContext);

	const [showShopView, setShowShopView] = useState(true);
	const ref = useRef<HTMLDivElement | null>(null);

	useOnClickOutside(ref, () => setCollapsedShop(true));

	return (
		<section
			ref={ref}
			aria-label="shop"
			className={`pointer-events-none absolute top-1/2 z-20 flex h-[30rem] -translate-y-1/2 flex-row transition-transform duration-700 ease-in-out  ${
				collapsedShop ? "translate-x-[-17.5rem]" : ""
			}`}
		>
			<div className="pointer-events-auto flex w-[17.5rem]  flex-col items-center justify-center">
				<div className="flex w-full flex-1 flex-row items-center justify-around text-xl">
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

				<div className="w-[17.5rem] flex-[5] overflow-auto rounded-br-lg text-white">
					{showShopView ? <ShopView /> : <StatsView />}
				</div>
			</div>

			<div className="pointer-events-none flex h-full flex-col justify-center">
				<button
					className="unselectable pointer-events-auto"
					onClick={() => setCollapsedShop(!collapsedShop)}
				>
					<ChevronLeft
						size={60}
						className={`transition-transform duration-700 ease-in-out ${
							collapsedShop ? "rotate-180" : ""
						}`}
					/>
				</button>
			</div>
		</section>
	);
}
