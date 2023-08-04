import { ReactElement, useState } from "react"

import BuyView from "@components/game/buy_view"
import BoughtView from "@components/game/bought_view"


export default function Shop(): ReactElement {
    const [showBuyView, setShowBuyView] = useState(true)

    return (
        <div>
            <button onClick={() => { setShowBuyView(true) }}>Buy</button>
            <button onClick={() => { setShowBuyView(false) }}>Bought</button>
            {showBuyView ? <BuyView /> : <BoughtView />}
        </div>
    )
}
