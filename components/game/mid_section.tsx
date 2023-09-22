import { ReactElement, useContext } from "react"

import PassiveChangeView from "@components/game/passive_change_view"
import TreeView from "@components/game/tree_view"
import { exportSave, importSave } from "@utilities/saves"
import ShopContext from "@utilities/shop_context"

export default function MidSection(): ReactElement {
    const {fromJSON, updateDataCookie} = useContext(ShopContext)

    return (
        <section aria-label="mid-section" className="select-none grid grid-cols-2 mx-auto w-[70rem] p-40 shadow-md rounded-b-xl">
            <button onClick={() => {
                updateDataCookie()
                exportSave()
            }}>
                export save
            </button>
            <button onClick={() => {
                importSave(fromJSON)
            }}>
                import save
            </button>
            <TreeView />
            <PassiveChangeView />
        </section>
    )
}