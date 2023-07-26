import { ReactElement } from "react"
import ShopTile from "@components/game/shop_tile"

export default function Shop(): ReactElement {

    return (
        <div aria-label="shop" className="grid grid-rows-5 divide-y divide-dotted ml-6 select-none max-w-[20vw] top-1/2 -translate-y-1/2 absolute">
            {["Shop"].map(elem => <ShopTile itemName={"Farmer"} initialPrice={15}>{elem}</ShopTile>)}
        </div>
    )
}