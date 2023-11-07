import { ReactElement, useContext } from "react";
import { abbreviateNumber } from "js-abbreviation-number";

import ShopTile from "@components/game/shop_tile";
import shopItems from "@utilities/shop_items";
import ShopContext from "@utilities/shop_context";

export default function ShopView(): ReactElement {
	const { currentApples } = useContext(ShopContext);

	return (
		<div
			aria-label="shop-view"
			className="flex h-full w-full flex-col justify-start"
		>
			<div className="hidden-scrollbar flex-[5] select-none overflow-y-scroll sm:text-xl">
				{shopItems.map((shopItem) => (
					<ShopTile
						shopItem={shopItem}
						key={`${shopItem.itemName} ShopTile`}
					/>
				))}
			</div>
			<div className="flex flex-1 items-center justify-center rounded-br-lg bg-brown-800 text-lg font-medium sm:text-2xl">
				<p>🍎{abbreviateNumber(Math.floor(currentApples))}</p>
			</div>
		</div>
	);
}

//  divide-y divide-dotted
