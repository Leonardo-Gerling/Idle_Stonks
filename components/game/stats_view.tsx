import { ReactElement, useContext } from "react"

import shopItems from "@utilities/shop_items"
import StatTile from "@components/game/stat_tile"
import ShopContext from "@utilities/shop_context"

export default function StatsView(): ReactElement {
    const {changePerSecond} = useContext(ShopContext)

    return (
        <div aria-label="stats-view" className="flex flex-col h-full w-full justify-start">
            <div className="flex-[5] overflow-y-scroll hidden-scrollbar select-none">
                {shopItems.map((shopItem) => <StatTile shopItem={shopItem} key={`${shopItem.itemName} StatTile`} />)}
            </div>
            <div className="flex flex-1 justify-center items-center bg-brown-800 text-lg font-medium">
                <p>🍎{changePerSecond.toFixed(2)}/s</p>
            </div>
        </div>
    )
}