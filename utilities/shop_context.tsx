import { createContext, useState, ReactNode } from "react"

const ShopContext = createContext({})

const items = ["farmer", "backyardTree", "appleFarm"] as const

type ItemName = typeof items[number]

export const ShopProvider = ({children}: {children: ReactNode}) => {
    const [counts, setCounts] = useState<{[key in ItemName]: number}>(
        {
            "farmer": 0,
            "backyardTree": 0,
            "appleFarm": 0
        }
    )

    const increment = (item: ItemName) => {
        setCounts({...counts, [item]: counts[item] + 1})
    }

    return (
        <ShopContext.Provider value={{ counts, setCounts, increment }}>
            {children}
        </ShopContext.Provider>
    )
}


export default ShopProvider
