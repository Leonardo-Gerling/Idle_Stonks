import { ReactElement, useContext } from "react";
import { abbreviateNumber } from "js-abbreviation-number";

import type { ShopItem, ShopItemCounts, ShopItemList } from "types";
import ShopContext from "@utilities/shop_context";

function previousItemBought(
	shopItem: ShopItem,
	counts: ShopItemCounts,
): boolean {
	const countsList = Object.entries(counts) as ShopItemList;

	let idx = 0;

	for (let i = 0; i < countsList.length; i++) {
		const itemName = countsList[i][0];

		if (itemName === shopItem.itemName) {
			idx = i;
			break;
		}
	}

	if (idx !== 0) {
		if (countsList[idx - 1][1] === 0) {
			return false;
		}
	}

	return true;
}

interface ShopTileProps {
	shopItem: ShopItem;
}

export default function ShopTile({ shopItem }: ShopTileProps): ReactElement {
	const {
		counts,
		currentApples,
		cumulApples,
		setCurrentApples,
		incrementItem,
	} = useContext(ShopContext);

	const name = shopItem.itemName;

	if (
		!previousItemBought(shopItem, counts) &&
		cumulApples * 2 < shopItem.getPrice(counts[name])
	) {
		return (
			<div className="shop-gradient flex h-24 w-full items-center justify-center">
				<p aria-label="Hidden Item">???</p>
			</div>
		);
	}

	return (
		<button
			className="shop-gradient flex h-24 w-full flex-row items-center justify-between px-2"
			onClick={() => {
				if (currentApples >= shopItem.getPrice(counts[name])) {
					setCurrentApples(
						currentApples - shopItem.getPrice(counts[name]),
					);
					incrementItem(shopItem, 1);
				}
			}}
		>
			<div className="flex flex-row items-center gap-1">
				<p className="text-2xl">{shopItem.emoji}</p>
				<p className="whitespace-nowrap">{name}</p>
			</div>

			<p className="font-medium">
				🍎{abbreviateNumber(shopItem.getPrice(counts[name]))}
			</p>
		</button>
	);
}
