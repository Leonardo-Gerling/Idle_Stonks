import { ReactElement, useContext } from "react"

import { farmer, backyardTree, appleFarm } from "@utilities/shop_items"
import StatTile from "@components/game/stat_tile"
import ShopContext from "@utilities/shop_context"

export default function StatsView(): ReactElement {
    const {changePerSecond} = useContext(ShopContext)

    return (
        <div aria-label="stats-view" className="flex flex-col h-full w-full justify-start">
            <div className="flex-[5]  divide-y divide-dotted overflow-y-scroll select-none">
                <StatTile shopItem={farmer} />
                <StatTile shopItem={backyardTree} />
                <StatTile shopItem={appleFarm} />
            </div>
            <div className="flex flex-1 justify-center items-center border-t-[1px]">
                <p>🍎{changePerSecond.toFixed(2)}/s in total</p>
            </div>
        </div>
    )
}