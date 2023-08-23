import { ReactElement, useContext } from "react"

import apple_tree from "@public/apple_tree.png"
import ShopContext from "@utilities/shop_context"
import fixNumber from "@utilities/fix_number"

let start: number | undefined
let previousTimeStamp: number | undefined

function calculateAppleCount(timeStamp: number): void {
    const {apples, changePerSecond, setApples} = useContext(ShopContext)

    if (start === undefined) {
        start = timeStamp
    }

    const elapsed = timeStamp - start
    const change = changePerSecond * (elapsed - (previousTimeStamp ?? 0)) / 1000

    previousTimeStamp = timeStamp

    setApples(fixNumber(apples + change))

    window.requestAnimationFrame(calculateAppleCount)
}

export default function TreeView(): ReactElement {
    const {apples, changePerClick, setApples} = useContext(ShopContext)

    return (
        <div aria-label="tree-view" className="mr-6">
            <img
                className="h-96 w-96 cursor-pointer undraggable" 
                onClick={() => setApples(fixNumber(apples + changePerClick))}
                src={apple_tree.src}
            />
            
            <p className="text-white bg-[#76b02a] mt-10 text-center text-4xl py-2">{apples} Apples</p>
        </div>
    )
}

window.requestAnimationFrame(calculateAppleCount)
