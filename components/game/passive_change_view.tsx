import { ReactElement, useContext } from "react"

import ShopContext from "@utilities/shop_context"
import fixNumber from "@utilities/fix_number"
import { farmer, backyardTree, appleFarm } from "@utilities/shop_items"

export default function PassiveChangeView(): ReactElement {
    const {counts, changePerSecond} = useContext(ShopContext)

    return (
        <div aria-label="passive-change-view" className="">
            {counts["Farmer"] > 0 ? <p>Your {counts["Farmer"]} Farmers passivley produce {fixNumber(farmer.changePerSecond * counts["Farmer"])} apples per second.</p> : null}
            {counts["Backyard Tree"] > 0 ? <p>Your {counts["Backyard Tree"]} Backyard Trees passivley produce {fixNumber(backyardTree.changePerSecond * counts["Backyard Tree"])} apples per second.</p> : null}
            {counts["Apple Farm"] > 0 ? <p>Your {counts["Apple Farm"]} Apple Farms passivley produce {fixNumber(appleFarm.changePerSecond * counts["Apple Farm"])} apples per second.</p> : null}
            <p>You are currently producing {fixNumber(changePerSecond)} apples per second.</p>
        </div>
    )
}
