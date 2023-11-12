import { ReactElement, useContext } from "react";
import { abbreviateNumber } from "js-abbreviation-number";

import shopItems from "@utilities/shop_items";
import StatTile from "@components/game/stat_tile";
import ShopContext from "@utilities/shop_context";
import fixNumber from "@utilities/fix_number";

export default function StatsView(): ReactElement {
	const { changePerSecond } = useContext(ShopContext);

	return (
		<div
			aria-label="stats-view"
			className="flex h-full w-full flex-col justify-start"
		>
			<div className="hidden-scrollbar flex-[5] select-none overflow-y-scroll bg-brown-700 sm:text-xl">
				{shopItems.map((shopItem) => (
					<StatTile
						shopItem={shopItem}
						key={`${shopItem.itemName} StatTile`}
					/>
				))}
			</div>
			<div className="flex flex-1 items-center justify-center rounded-br-lg bg-brown-800 text-lg font-medium sm:text-2xl">
				<p>
					🍎{abbreviateNumber(fixNumber(changePerSecond))}
					/s
				</p>
			</div>
		</div>
	);
}
