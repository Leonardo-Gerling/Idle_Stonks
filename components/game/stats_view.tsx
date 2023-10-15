import { ReactElement } from "react"

import { farmer, backyardTree, appleFarm } from "@utilities/shop_items"
import StatTile from "@components/game/stat_tile"

export default function StatsView(): ReactElement {
    return (
        <div aria-label="stats-view" className="flex flex-col w-full h-full justify-center divide-y divide-dotted select-none">
            <StatTile shopItem={farmer} />
            <StatTile shopItem={backyardTree} />
            <StatTile shopItem={appleFarm} />
        </div>
    )
}