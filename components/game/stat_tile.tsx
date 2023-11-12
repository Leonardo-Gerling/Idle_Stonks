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

	if (counts[name] === 0) {
		return (
			<div className="shop-gradient flex h-24 w-full items-center justify-center sm:h-32 3xl:h-52 3xl:text-2xl">
				<p aria-label="Hidden Item">???</p>
			</div>
		);
	}

	return (
		<div className="shop-gradient flex h-24 w-full flex-row items-center justify-between px-2 sm:h-32 3xl:h-52 3xl:text-2xl">
			<div className="flex w-full flex-row items-center gap-1">
				<p className="text-2xl 3xl:text-4xl">{shopItem.emoji}</p>
				<p className="whitespace-nowrap">{name}</p>
			</div>

			<div className="flex h-full w-full flex-col items-end justify-evenly font-medium">
				<p>x{counts[name]}</p>
				<p>
					🍎
					{abbreviateNumber(
						fixNumber(shopItem.changePerSecond * counts[name]),
					)}
					/s
				</p>
			</div>
		</div>
	);
}
