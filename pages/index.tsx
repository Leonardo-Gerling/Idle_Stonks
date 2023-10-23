import { ReactElement } from "react"

import Shop from "@components/game/shop"
import TreeSection from "@components/game/tree_section"
import BottomSection from "@components/game/bottom_section"
import Settings from "@components/game/settings"
import BlurScreen from "@components/game/blur_screen"

export default function Game(): ReactElement {
    return (
        <div aria-label="game" className="bg-brown-200 h-screen w-screen">
            <Shop />
            <div className="flex flex-col h-full w-full mx-auto justify-between">
                <TreeSection />
                <BottomSection />
            </div>
            <Settings />
            <BlurScreen />
        </div>
    )
}