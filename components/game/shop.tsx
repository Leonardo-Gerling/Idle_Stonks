import { ReactElement, useState, useContext } from "react"
import { ChevronLeft } from "@geist-ui/icons"

import ShopButton from "@components/game/shop_button"
import ShopView from "@components/game/shop_view"
import StatsView from "@components/game/stats_view"
import ShopContext from "@utilities/shop_context"


export default function Shop(): ReactElement {
    const { collapsedShop, setCollapsedShop } = useContext(ShopContext)

    const [showShopView, setShowShopView] = useState(true)

    return (
        <>            
            <section aria-label="shop" className={`transform-transition ease-in-out duration-700 absolute flex flex-row top-1/2 -translate-y-1/2 h-[30rem] z-20 pointer-events-none  ${collapsedShop ? "translate-x-[-17.5rem]" : ""}`}>  
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
                    <button className="pointer-events-auto unselectable" onClick={() => setCollapsedShop(!collapsedShop)}>
                        <ChevronLeft size={60} className={`transform-transition ease-in-out duration-700 ${collapsedShop ? "rotate-180" : ""}`} />
                    </button>
                </div>
            </section>
        </>
    )
}