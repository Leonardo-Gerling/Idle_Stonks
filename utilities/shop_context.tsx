import { createContext, useState, ReactNode } from "react"

import { ItemName, ShopItemCounts } from "types"
import { farmer, backyardTree, appleFarm } from "@utilities/shop_items"

const defaultCounts: ShopItemCounts = {
    "Farmer": 0,
    "Backyard Tree": 0,
    "Apple Farm": 0
} as const

const ShopContext = createContext<{
    counts: ShopItemCounts, 
    apples: number,
    changePerSecond: number,
    changePerClick: number,
    incrementItem: (item: ItemName) => void
    setApples: (apples: number | ((apples: number) => number)) => void
}>({
    counts: defaultCounts,
    apples: 0,
    changePerSecond: 0,
    changePerClick: 1,
    incrementItem: () => {},
    setApples: () => {}
})

export const ShopProvider = ({children}: {children: ReactNode}) => {
    const [counts, setCounts] = useState<ShopItemCounts>(defaultCounts)
    const [apples, setApples] = useState<number>(0)
    const [changePerSecond, setChangePerSecond] = useState<number>(0)
    const [changePerClick, setChangePerClick] = useState<number>(1)

    const incrementItem = (item: ItemName) => {
        setCounts({...counts, [item]: counts[item] + 1})

        switch (item) {
            case "Farmer":
                setChangePerSecond(changePerSecond + farmer.changePerSecond)
                setChangePerClick(changePerClick + farmer.changePerClick)
                break

            case "Backyard Tree":
                setChangePerSecond(changePerSecond + backyardTree.changePerSecond)
                setChangePerClick(changePerClick + backyardTree.changePerClick)
                break
                
            case "Apple Farm":
                setChangePerSecond(changePerSecond + appleFarm.changePerSecond)
                setChangePerClick(changePerClick + appleFarm.changePerClick)
                break
        }
    }

    return (
        <ShopContext.Provider value={{ counts, apples, changePerClick, changePerSecond, incrementItem, setApples }}>
            {children}
        </ShopContext.Provider>
    )
}


export default ShopContext
