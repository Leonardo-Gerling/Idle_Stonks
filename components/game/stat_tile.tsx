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
        <div aria-label={`Stats of ${name}s`} className="flex pl-3 justify-start items-center h-24 w-full">
            {counts[name] > 0 ? <p>{counts[name]} {shopItem.emoji}{name}{counts[name] > 1 ? "s" : ""} produce {fixNumber(shopItem.changePerSecond * counts[name])} apples/s</p> : null}
        </div>
    )
}