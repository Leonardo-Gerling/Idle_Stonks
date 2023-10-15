import { ReactElement, useContext } from "react"
import Image from "next/image"

import ShopContext from "@utilities/shop_context"
import useAppleGame from "@utilities/use_apple_game"

export default function TreeSection(): ReactElement {
    const {apples, changePerClick, setApples} = useContext(ShopContext)

    useAppleGame()

    return (
        <div aria-label="Tree Section" className="select-none flex flex-col mx-auto w-full h-[35rem] p-[2rem] items-center">
            <div className="w-full h-full">
                <Image
                    src="/apple_tree.png"
                    width={512}
                    height={512}
                    priority={true}
                    alt="Apple Tree"
                    onClick={() => setApples(apples + changePerClick + 1000)}
                    className="cursor-pointer undraggable h-full w-full object-bottom object-contain"
                />
            </div>
            
            <p className="text-white bg-green-500 mt-10 text-center text-4xl py-2 px-4 rounded-3xl">{Math.floor(apples).toFixed(0)} Apples</p>
        </div>
    )
}

// <a href="https://www.flaticon.com/free-icons/apple-tree" title="apple tree icons">Apple tree icons created by Freepik - Flaticon</a>  (Attribution vom Apple Tree Icon)