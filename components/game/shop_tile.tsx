import { ReactElement, useContext } from "react"

import type { ShopItem, ShopItemCounts, ShopItemList } from "types"
import ShopContext from "@utilities/shop_context"

function previousItemBought(shopItem: ShopItem, counts: ShopItemCounts): boolean {
    const countsList = Object.entries(counts) as ShopItemList

    let idx = 0

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

interface ShopTileProps {
    shopItem: ShopItem
}

export default function ShopTile({ shopItem }: ShopTileProps): ReactElement {
    const {counts, apples, setApples, incrementItem} = useContext(ShopContext)

    if (!previousItemBought(shopItem, counts)) {
        return (
            <div className="flex justify-center items-center h-24 w-full">
                <p aria-label="Hidden Item">
                    ???
                </p>
            </div>
        )
    } 

    return (
        <div className="flex justify-center items-center h-24 w-full">
            <button aria-label={`Buy ${shopItem.itemName}`} onClick={() => { 
                if (apples >= shopItem.getPrice(counts[shopItem.itemName])) {
                    setApples(apples - shopItem.getPrice(counts[shopItem.itemName]))
                    incrementItem(shopItem, 1)
                }
            }}>
                {shopItem.itemName} costs {shopItem.getPrice(counts[shopItem.itemName])}. You currently have {counts[shopItem.itemName]}.
            </button>
        </div>
    )

    
}