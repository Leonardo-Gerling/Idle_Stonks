import { ReactElement, useContext, useState } from "react";

import type { ShopItem } from "@utilities/shop_items"
import ShopContext from "@utilities/shop_context"

interface ShopTileProps {
    shopItem: ShopItem
}

export default function ShopTile({ shopItem }: ShopTileProps): ReactElement {
    const {counts, increment} = useContext(ShopContext) /* FIX */
    const [price, setPrice] = useState(shopItem.initialPrice);

    return (
        <button className="h-24" onClick={() => { increment(shopItem.itemName); setPrice(shopItem.setPriceMethod(price)) }}>
            {shopItem.itemName} costs {price}. You currently have {counts[shopItem.itemName]}.
        </button>
    )
}