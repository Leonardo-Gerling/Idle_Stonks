import { ReactElement } from 'react'

import ShopTile from "@components/game/shop_tile"
import { farmer, backyardTree, appleFarm } from "@utilities/shop_items"

export default function BuyView(): ReactElement {
    return (
        <div aria-label="shop" className="grid grid-rows-5 divide-y divide-dotted ml-6 select-none max-w-[20vw] top-1/2 -translate-y-1/2 absolute">
            <ShopTile shopItem={farmer} />
            <ShopTile shopItem={backyardTree} />
            <ShopTile shopItem={appleFarm} />
        </div>
    )
}

