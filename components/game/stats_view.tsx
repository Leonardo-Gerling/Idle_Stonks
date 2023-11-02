import { ReactElement, useContext } from "react";
import { abbreviateNumber } from "js-abbreviation-number";

import shopItems from "@utilities/shop_items";
import StatTile from "@components/game/stat_tile";
import ShopContext from "@utilities/shop_context";

export default function StatsView(): ReactElement {
	const { counts, changePerSecond } = useContext(ShopContext);

	return (
		<div
			aria-label="stats-view"
			className="flex h-full w-full flex-col justify-start"
		>
			<div className="hidden-scrollbar flex-[5] select-none overflow-y-scroll bg-brown-700">
				{shopItems
					.filter((shopItem) => counts[shopItem.itemName] > 0)
					.map((shopItem) => (
						<StatTile
							shopItem={shopItem}
							key={`${shopItem.itemName} StatTile`}
						/>
					))}
			</div>
			<div className="flex flex-1 items-center justify-center bg-brown-800 text-lg font-medium">
				<p>
					🍎{abbreviateNumber(parseFloat(changePerSecond.toFixed(2)))}
					/s
				</p>
			</div>
		</div>
	);
}
