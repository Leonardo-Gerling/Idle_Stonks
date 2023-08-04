import { ReactElement } from 'react'

import ShopTile from "@components/game/shop_tile"

function setFarmerPrice(price: number) {
    return price + 5
}

function setBackyardTreePrice(price: number) {
    return price + 20
}

function setAppleFarmPrice(price: number) {
    return price + 300
}

export default function BuyView(): ReactElement {
    return (
        <div aria-label="shop" className="grid grid-rows-5 divide-y divide-dotted ml-6 select-none max-w-[20vw] top-1/2 -translate-y-1/2 absolute">
            <ShopTile itemName={"Farmer"} initialPrice={15} setPriceMethod={setFarmerPrice} />
            <ShopTile itemName={"Backyard Tree"} initialPrice={200} setPriceMethod={setBackyardTreePrice} />
            <ShopTile itemName={"Apple Farm"} initialPrice={7000} setPriceMethod={setAppleFarmPrice} />
        </div>
    )
}

