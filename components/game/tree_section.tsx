import { ReactElement, useContext } from "react"
import Image from "next/image"

import ShopContext from "@utilities/shop_context"
import useAppleGame from "@utilities/use_apple_game"

export default function TreeSection(): ReactElement {
    const {currentApples, cumulApples, changePerClick, setCurrentApples, setCumulApples} = useContext(ShopContext)

    useAppleGame()

    return (
        <section aria-label="Tree Section" className="select-none flex flex-col mx-auto w-full h-[32rem] p-8 items-center">
            <button 
                className="w-full h-full" 
                onClick={() => {
                    setCurrentApples(currentApples + changePerClick + 1000)
                    setCumulApples(cumulApples + changePerClick + 1000)
                }}
            >
                <Image
                    src="/apple_tree.png"
                    width={512}
                    height={512}
                    priority={true}
                    alt="Apple Tree"
                    className="undraggable h-full w-full object-bottom object-contain"
                />
            </button>
            
            <p className="text-white bg-green-500 mt-10 text-center text-3xl py-2 px-4 rounded-3xl">{Math.floor(currentApples).toFixed(0)} Apples</p>
        </section>
    )
}

// <a href="https://www.flaticon.com/free-icons/apple-tree" title="apple tree icons">Apple tree icons created by Freepik - Flaticon</a>  (Attribution vom Apple Tree Icon)