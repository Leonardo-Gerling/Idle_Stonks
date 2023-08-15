import { ReactElement, useState } from "react";

import type { ShopItem } from "@utilities/shop_items";

interface ShopTileProps {
    shopItem: ShopItem
}

export default function ShopTile({ shopItem }: ShopTileProps): ReactElement {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(shopItem.initialPrice);

    return (
        <button className="h-24" onClick={() => { setCount(count + 1); setPrice(shopItem.setPriceMethod(price)) }}>
            {shopItem.itemName} costs {price}. You currently have {count}.
        </button>
    )
}