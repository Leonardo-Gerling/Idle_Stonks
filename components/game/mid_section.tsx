import { ReactElement } from "react"

import PassiveChangeView from "@components/game/passive_change_view"
import TreeView from "@components/game/tree_view"
import useSaveGame from "@utilities/use_save_game"

export default function MidSection(): ReactElement {
    return (
        <section aria-label="mid-section" className="select-none grid grid-cols-2 mx-auto w-[70rem] p-40 shadow-md rounded-b-xl">
            <button onClick={() => useSaveGame(true)}>
                export save
            </button>
            <TreeView />
            <PassiveChangeView />
        </section>
    )
}