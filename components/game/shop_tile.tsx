import { ReactElement, useContext } from "react";

import type { ShopItem } from "@utilities/shop_items"
import ShopContext from "@utilities/shop_context"

interface ShopTileProps {
    shopItem: ShopItem
}

export default function ShopTile({ shopItem }: ShopTileProps): ReactElement {
    const {counts, increment} = useContext(ShopContext)

    return (
        <button className="h-24" onClick={() => { increment(shopItem.itemName) }}>
            {shopItem.itemName} costs {shopItem.getPrice(counts[shopItem.itemName])}. You currently have {counts[shopItem.itemName]}.
        </button>
    )
}