import { ReactElement } from "react"

import Shop from "@components/game/shop"
import TreeSection from "@components/game/tree_section"
import BottomSection from "@components/game/bottom_section"

export default function Game(): ReactElement {
    return (
        <div aria-label="game" className="bg-brown-200">
            <Shop />
            <div className="flex flex-col h-screen max-w-[46rem] mx-auto justify-between">
                <TreeSection />
                <BottomSection />
            </div>
        </div>
    )
}