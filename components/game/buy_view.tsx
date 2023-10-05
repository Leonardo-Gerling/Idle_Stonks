import { ReactElement } from "react"

import ShopTile from "@components/game/shop_tile"
import { farmer, backyardTree, appleFarm } from "@utilities/shop_items"

export default function BuyView(): ReactElement {
    return (
        <div aria-label="buy-view" className="grid grid-rows-5 divide-y divide-dotted pl-6 select-none top-1/2 -translate-y-1/2 absolute">
            <ShopTile shopItem={farmer} buyTile={true} />
            <ShopTile shopItem={backyardTree} buyTile={true} />
            <ShopTile shopItem={appleFarm} buyTile={true} />
        </div>
    )
}

