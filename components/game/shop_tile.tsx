import { ReactElement, useContext } from "react"

import type { ShopItem } from "types"
import ShopContext from "@utilities/shop_context"

interface InnerTileProps {
    shopItem: ShopItem
}

function BuyTile({ shopItem }: InnerTileProps): ReactElement {
    const {counts, apples, setApples, incrementItem} = useContext(ShopContext)

    return (
        <button aria-label={`Buy ${shopItem.itemName}`} onClick={() => { 
            if (apples >= shopItem.getPrice(counts[shopItem.itemName])) {
                setApples(apples - shopItem.getPrice(counts[shopItem.itemName]))
                incrementItem(shopItem, 1)
            }
        }}>
            {shopItem.itemName} costs {shopItem.getPrice(counts[shopItem.itemName])}. You currently have {counts[shopItem.itemName]}.
        </button>
    )
}

function BoughtTile({ shopItem }: InnerTileProps): ReactElement {
    const {counts} = useContext(ShopContext)

    return (
        <div aria-label={`Bought ${shopItem.itemName}`} className="overflow-x-scroll whitespace-nowrap">
            {shopItem.emoji.repeat(counts[shopItem.itemName])}
        </div>
    )
}

interface ShopTileProps {
    shopItem: ShopItem,
    buyTile: boolean
}

export default function ShopTile({ shopItem, buyTile }: ShopTileProps): ReactElement {
    return (
        <div className="h-24 max-w-[15vw]">
            {buyTile ? <BuyTile shopItem={shopItem} /> : <BoughtTile shopItem={shopItem} />}
        </div>
    )
}