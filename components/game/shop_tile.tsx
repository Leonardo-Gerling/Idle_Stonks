import { ReactElement, useContext } from "react"

import type { ShopItem, ShopItemCounts, ShopItemList } from "types"
import ShopContext from "@utilities/shop_context"

interface InnerTileProps {
    shopItem: ShopItem
}

function previousItemBought(shopItem: ShopItem, counts: ShopItemCounts): boolean {
    const countsList = Object.entries(counts) as ShopItemList

    let idx: number = 0

    for (let i = 0; i < countsList.length; i++) {
        const itemName = countsList[i][0]

        if (itemName === shopItem.itemName) {
            idx = i
            break
        }
    }

    if (idx !== 0) {
        if (countsList[idx - 1][1] === 0) {
            return false
        }
    } 

    return true
}

function BuyTile({ shopItem }: InnerTileProps): ReactElement {
    const {counts, apples, setApples, incrementItem} = useContext(ShopContext)

    if (!previousItemBought(shopItem, counts)) {
        return (
            <p aria-label="Hidden Item">
                ???
            </p>
        )
    } 

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
        <div className="h-24 max-w-[15vw] justify-self-center">
            {buyTile ? <BuyTile shopItem={shopItem} /> : <BoughtTile shopItem={shopItem} />}
        </div>
    )
}