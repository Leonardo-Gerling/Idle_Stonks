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
			className={`pointer-events-none absolute top-1/2 z-20 flex h-[30rem] -translate-y-1/2 flex-row transition-transform duration-700 ease-in-out sm:h-[40rem]  ${
				collapsedShop
					? "translate-x-[-13rem] xs:translate-x-[-17rem] sm:translate-x-[-35rem]"
					: ""
			}`}
		>
			<div className="pointer-events-auto flex w-[13rem] flex-col items-center justify-center xs:w-[17rem] sm:w-[35rem]">
				<div className="flex w-full flex-1 flex-row items-center justify-around text-xl sm:text-2xl">
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

				<div className="w-[13rem] flex-[5] overflow-auto rounded-br-lg text-white xs:w-[17rem] sm:w-[35rem]">
					{showShopView ? <ShopView /> : <StatsView />}
				</div>
			</div>

			<div className="pointer-events-none flex h-full justify-center xl:hidden">
				<button
					className="pointer-events-auto"
					onClick={() => setCollapsedShop(!collapsedShop)}
				>
					<ChevronLeft
						size={window.screen.width < 640 ? 60 : 80}
						className={`transition-transform duration-700 ease-in-out ${
							collapsedShop ? "rotate-180" : ""
						}`}
					/>
				</button>
			</div>
		</section>
	);
}
