import { ReactElement, useContext } from "react"

import InfoIcon from "@svgs/info_icon"
import InfoView from "@components/game/info_view"
import ShopContext from "@utilities/shop_context"

export default function Info(): ReactElement {
    const { setCollapsedInfo } = useContext(ShopContext)

    return (
        <>
            <InfoView />

            <button className="h-[40px] w-[40px] absolute top-5 right-5" onClick={() => setCollapsedInfo(false)}>
                <InfoIcon height={40} width={40} />
            </button>
        </>
    )
}
