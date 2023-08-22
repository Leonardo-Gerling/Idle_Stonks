import { ReactElement, useContext } from "react"

import type { ShopItem } from "@utilities/shop_items"
import ShopContext from "@utilities/shop_context"
import fixNumber from "@utilities/fix_number"

interface ShopTileProps {
    shopItem: ShopItem
}

export default function ShopTile({ shopItem }: ShopTileProps): ReactElement {
    const {counts, apples, setApples, incrementItem} = useContext(ShopContext)

    return (
        <button className="h-24" onClick={() => { 
            if (apples >= shopItem.getPrice(counts[shopItem.itemName])) {
                setApples(fixNumber(apples - shopItem.getPrice(counts[shopItem.itemName])))
                incrementItem(shopItem.itemName)
            }
        }}>
            {shopItem.itemName} costs {shopItem.getPrice(counts[shopItem.itemName])}. You currently have {counts[shopItem.itemName]}.
        </button>
    )
}