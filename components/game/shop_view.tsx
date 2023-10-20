import { ReactElement } from "react"

import ShopTile from "@components/game/shop_tile"
import { farmer, backyardTree, appleFarm } from "@utilities/shop_items"

export default function ShopView(): ReactElement {
    return (
        <div aria-label="buy-view" className="flex flex-col justify-start divide-y divide-dotted select-none">  
            <ShopTile shopItem={farmer} />
            <ShopTile shopItem={backyardTree} />
            <ShopTile shopItem={appleFarm} />
        </div>
    )
}

