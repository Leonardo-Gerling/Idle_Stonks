import { ReactElement } from "react"

import Shop from "@components/game/shop"
import TreeSection from "@components/game/tree_section"
import BottomSection from "@components/game/bottom_section"
import SettingsCogWheel from "@components/game/settings_cog_wheel"

export default function Game(): ReactElement {
    return (
        <div aria-label="game" className="bg-brown-200 h-screen w-screen">
            <Shop />
            <div className="flex flex-col h-full w-full mx-auto justify-between">
                <TreeSection />
                <BottomSection />
            </div>
            <SettingsCogWheel />
        </div>
    )
}