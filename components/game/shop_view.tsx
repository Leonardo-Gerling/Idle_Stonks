import { ReactElement, useContext } from "react"
import { abbreviateNumber } from "js-abbreviation-number"

import ShopTile from "@components/game/shop_tile"
import shopItems from "@utilities/shop_items"
import ShopContext from "@utilities/shop_context"

export default function ShopView(): ReactElement {
    const {currentApples} = useContext(ShopContext)

    return (
        <div aria-label="buy-view" className="flex flex-col h-full w-full justify-start">
            <div className="flex-[5] overflow-y-scroll hidden-scrollbar select-none">
                {shopItems.map((shopItem) => <ShopTile shopItem={shopItem} key={`${shopItem.itemName} ShopTile`} />)}
            </div>  
            <div className="flex flex-1 justify-center items-center text-lg font-medium bg-brown-800">
                <p>🍎{abbreviateNumber(Math.floor(currentApples))}</p>
            </div>
        </div>
    )
}

//  divide-y divide-dotted