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
    currentApples: number,
    cumulApples: number,
    changePerSecond: number,
    changePerClick: number,
    importLoaded: boolean,
    incrementItem: (item: ShopItem, num: number) => void,
    setCurrentApples: (currentApples: number) => void,
    setCumulApples: (cumulApples: number) => void,
    setImportLoaded: (loaded: boolean) => void,
    fromJSON: (data: DefaultData) => void,
    updateDataCookie: () => void
}>({
    counts: defaultCounts,
    currentApples: 0,
    cumulApples: 0,
    changePerSecond: 0,
    changePerClick: 1,
    importLoaded: true,
    incrementItem: () => {},
    setCurrentApples: () => {},
    setCumulApples: () => {},
    setImportLoaded: () => {},
    fromJSON: () => {},
    updateDataCookie: () => {}
})

export const ShopProvider = ({children}: {children: ReactNode}) => {
    const [counts, setCounts] = useState(defaultCounts)
    const [currentApples, setCurrentApples] = useState(0)
    const [cumulApples, setCumulApples] = useState(0)

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
        setCurrentApples(data.currentApples)
        setCumulApples(data.cumulApples)
        setChangePerClick(data.changePerClick)
        setChangePerSecond(data.changePerSecond)

        updateDataCookie()
    }

    const updateDataCookie = () => {
        const saveData: DefaultData = {
            "currentApples": currentApples,
            "cumulApples": cumulApples,
            "counts": counts,
            "changePerClick": changePerClick,
            "changePerSecond": changePerSecond
        }
    
        const data = JSON.stringify(saveData)
    
        Cookies.set("data", data)
    }

    return (
        <ShopContext.Provider value={{ counts, currentApples, cumulApples, changePerClick, changePerSecond, importLoaded, incrementItem, setCurrentApples, setCumulApples, setImportLoaded, fromJSON, updateDataCookie }}>
            {children}
        </ShopContext.Provider>
    )
}


export default ShopContext
