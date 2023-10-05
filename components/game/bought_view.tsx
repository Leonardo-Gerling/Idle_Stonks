import { ReactElement } from "react"

import ShopTile from "@components/game/shop_tile"
import { farmer, backyardTree, appleFarm } from "@utilities/shop_items"

export default function BoughtView(): ReactElement {
    return (
        <div aria-label="bought-view" className="grid grid-rows-5 divide-y divide-dotted ml-6 select-none top-1/2 -translate-y-1/2 absolute overflow-y-scroll whitespace-nowrap">
            <ShopTile shopItem={farmer} buyTile={false} />
            <ShopTile shopItem={backyardTree} buyTile={false} />
            <ShopTile shopItem={appleFarm} buyTile={false} />
        </div>
    )
}