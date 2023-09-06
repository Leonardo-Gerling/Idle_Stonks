import { ReactElement, useContext } from "react"

import PassiveChangeView from "@components/game/passive_change_view"
import TreeView from "@components/game/tree_view"
import exportSave from "@utilities/export_save"
import ShopContext from "@utilities/shop_context"

export default function MidSection(): ReactElement {
    const {updateCookie} = useContext(ShopContext)

    return (
        <section aria-label="mid-section" className="select-none grid grid-cols-2 mx-auto w-[70rem] p-40 shadow-md rounded-b-xl">
            <button onClick={() => {
                updateCookie()
                exportSave()
            }}>
                export save
            </button>
            <TreeView />
            <PassiveChangeView />
        </section>
    )
}