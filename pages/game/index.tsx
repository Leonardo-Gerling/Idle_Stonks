import { ReactElement } from "react"

import Shop from "@components/game/shop"
import MidSection from "@components/game/mid_section"
import BottomSection from "@components/game/bottom_section"

export default function Game(): ReactElement {
    return (
        <div>
            <Shop />
            <MidSection />
            <BottomSection />
        </div>
    )
}