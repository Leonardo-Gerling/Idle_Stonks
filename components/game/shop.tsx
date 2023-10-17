import { ReactElement, useState } from "react"


import ShopView from "@components/game/shop_view"
import StatsView from "@components/game/stats_view"
import ShopArrow from "@svgs/shop_arrow"


export default function Shop(): ReactElement {
    const [showShopView, setShowShopView] = useState(true)
    const [collapsed, setCollapsed] = useState(false)

    return (
        <section aria-label="shop" className={`transform-transition ease-in-out duration-700 absolute flex flex-row top-1/2 -translate-y-1/2 h-[25rem] pointer-events-none  ${collapsed ? "translate-x-[-10rem]" : ""}`}>  
            <div className="flex flex-col w-[10rem] justify-center items-center pointer-events-auto">
                <div className="flex flex-row justify-around items-center w-full bg-green-400 h-[5rem] rounded-tr-lg"> 
                    <button onClick={() => setShowShopView(true)}>Shop</button>
                    <button onClick={() => setShowShopView(false)}>Stats</button>
                </div>

                <div className="bg-amber-700 h-[20rem] w-full rounded-br-lg">
                    {showShopView ? <ShopView /> : <StatsView />}
                </div>
            </div>

            <div className="flex flex-col justify-center h-full pointer-events-none">
                <button className="pointer-events-auto unselectable" onClick={() => setCollapsed(!collapsed)}>
                    <ShopArrow width={50} className={`transform-transition ease-in-out duration-700 ${collapsed ? "rotate-180" : ""}`} />
                </button>
            </div>
        </section>
    )
}