import { ReactElement, useContext } from "react";
import { abbreviateNumber } from "js-abbreviation-number";

import ShopContext from "@utilities/shop_context";
import { ShopItem } from "types";
import fixNumber from "@utilities/fix_number";

interface StatTileProps {
	shopItem: ShopItem;
}

export default function StatTile({ shopItem }: StatTileProps): ReactElement {
	const { counts } = useContext(ShopContext);

	const name = shopItem.itemName;

	return (
		<div className="shop-gradient flex h-24 w-full flex-row items-center justify-between px-2">
			<div className="flex w-full flex-row items-center gap-1">
				<p className="text-2xl">{shopItem.emoji}</p>
				<p className="whitespace-nowrap">{name}</p>
			</div>

			<div className="flex h-full w-full flex-col items-end justify-evenly font-medium">
				<p>x{counts[name]}</p>
				<p>
					🍎
					{abbreviateNumber(
						parseFloat(
							(shopItem.changePerSecond * counts[name]).toFixed(
								2,
							),
						),
					)}
					/s
				</p>
			</div>
		</div>
	);
}
