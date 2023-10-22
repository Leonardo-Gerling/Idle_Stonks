import { createContext, useState, ReactNode } from "react"
import Cookies from "js-cookie"

import type { ShopItemCounts, ShopItem, DefaultData } from "types"


const defaultCounts: ShopItemCounts = {
    "Apple Farmer": 0,
    "Apple Tree": 0,
    "Apple Farm": 0,
    "Apple Factory": 0,
} as const

const ShopContext = createContext<{
    counts: ShopItemCounts, 
    apples: number,
    changePerSecond: number,
    changePerClick: number,
    importLoaded: boolean,
    incrementItem: (item: ShopItem, num: number) => void,
    setApples: (apples: number) => void,
    setImportLoaded: (loaded: boolean) => void,
    fromJSON: (data: DefaultData) => void,
    updateDataCookie: () => void
}>({
    counts: defaultCounts,
    apples: 0,
    changePerSecond: 0,
    changePerClick: 1,
    importLoaded: true,
    incrementItem: () => {},
    setApples: () => {},
    setImportLoaded: () => {},
    fromJSON: () => {},
    updateDataCookie: () => {}
})

export const ShopProvider = ({children}: {children: ReactNode}) => {
    const [counts, setCounts] = useState(defaultCounts)
    const [apples, setApples] = useState(0)
    const [changePerSecond, setChangePerSecond] = useState(0)
    const [changePerClick, setChangePerClick] = useState(1)
    const [importLoaded, setImportLoaded] = useState(true)

    const incrementItem = (item: ShopItem, num: number) => {
        setCounts({...counts, [item.itemName]: counts[item.itemName] + num})

        setChangePerSecond(changePerSecond + (item.changePerSecond * num))
        setChangePerClick(changePerClick + (item.changePerClick * num))
    }

    const fromJSON = (data: DefaultData) => {
        setCounts(data.counts)
        setApples(data.apples)
        setChangePerClick(data.changePerClick)
        setChangePerSecond(data.changePerSecond)

        updateDataCookie()
    }

    const updateDataCookie = () => {
        const saveData: DefaultData = {
            "apples": apples,
            "counts": counts,
            "changePerClick": changePerClick,
            "changePerSecond": changePerSecond
        }
    
        const data = JSON.stringify(saveData)
    
        Cookies.set("data", data)
    }

    return (
        <ShopContext.Provider value={{ counts, apples, changePerClick, changePerSecond, importLoaded, incrementItem, setApples, setImportLoaded, fromJSON, updateDataCookie }}>
            {children}
        </ShopContext.Provider>
    )
}


export default ShopContext
