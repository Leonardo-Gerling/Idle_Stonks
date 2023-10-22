import { ReactElement, useState } from "react"

import ShopButton from "@components/game/shop_button"
import ShopView from "@components/game/shop_view"
import StatsView from "@components/game/stats_view"
import ShopArrow from "@svgs/shop_arrow"


export default function Shop(): ReactElement {
    const [showShopView, setShowShopView] = useState(true)
    const [collapsed, setCollapsed] = useState(false)

    return (
        <>
            <div className={`absolute inset-0 h-screen w-screen z-10 backdrop-blur-[2px] transition-opacity ease-in-out duration-700 ${collapsed ? "opacity-0 pointer-events-none" : "opacity-100"}`} /> 
            <section aria-label="shop" className={`transform-transition ease-in-out duration-700 absolute flex flex-row top-1/2 -translate-y-1/2 h-[30rem] z-20 pointer-events-none  ${collapsed ? "translate-x-[-17.5rem]" : ""}`}>  
                <div className="flex flex-col w-[17.5rem]  justify-center items-center pointer-events-auto">

                    <div className="flex flex-row flex-1 justify-around items-center w-full text-xl"> 
                        <ShopButton text="Shop" onClick={() => setShowShopView(true)} className={`${showShopView ? "bg-green-600 shadow-inner shadow-green-800" : ""}`} />
                        <ShopButton text="Stats" onClick={() => setShowShopView(false)} className={`rounded-tr-lg ${showShopView ? "" : "bg-green-600 shadow-inner shadow-green-800"}`} />
                    </div>

                    <div className="w-[17.5rem] flex-[5] rounded-br-lg text-white overflow-auto">
                        {showShopView ? <ShopView /> : <StatsView />}
                    </div>
                </div>

                <div className="flex flex-col justify-center h-full pointer-events-none">
                    <button className="pointer-events-auto unselectable" onClick={() => setCollapsed(!collapsed)}>
                        <ShopArrow width={50} className={`transform-transition ease-in-out duration-700 ${collapsed ? "rotate-180" : ""}`} />
                    </button>
                </div>
            </section>
        </>
    )
}