import { ReactElement, useContext } from "react"

import ShopContext from "@utilities/shop_context"
import { ShopItem } from "types"
import fixNumber from "@utilities/fix_number"

interface StatTileProps {
    shopItem: ShopItem
}

export default function StatTile({ shopItem }: StatTileProps): ReactElement {
    const {counts} = useContext(ShopContext)

    const name = shopItem.itemName

    return (
        <div className="flex flex-row justify-between items-center px-2 h-24 w-full shop-gradient">
            <div className="flex flex-row gap-1 w-full items-center">
                <p className="text-2xl">{shopItem.emoji}</p>
                <p className="whitespace-nowrap">{name}</p>
            </div>

            <div className="flex flex-col justify-evenly items-end h-full w-full font-medium">
                <p>x{counts[name]}</p>
                <p>🍎{fixNumber(shopItem.changePerSecond * counts[name])}/s</p>
            </div>
        </div>
    )
}