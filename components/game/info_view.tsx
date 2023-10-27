import { ReactElement, useContext } from "react"

import XMark from "@svgs/x_mark"
import Github from "@svgs/github"
import Email from "@svgs/email"
import ShopContext from "@utilities/shop_context"

export default function InfoView(): ReactElement {
    const { collapsedInfo, setCollapsedInfo } = useContext(ShopContext)

    return (
        <div aria-label="info-view" className={`absolute top-0 h-[20rem] inset-x-4 bg-green-600 z-20 transition-transform duration-700 ease-in-out rounded-b-lg ${collapsedInfo ? "translate-y-[-20rem]": ""}`}>
            <div className="relative h-full w-full">
                <button className="absolute top-4 right-4" onClick={() => setCollapsedInfo(true)}>
                    <XMark width={35} height={35} />
                </button>
                <div className="flex flex-row pt-16 pb-8 h-full w-full">
                    <div className="flex flex-col justify-start items-center text-center pl-3 pb-6 gap-2 h-full w-full">
                        <p className="text-xl mb-2">Socials</p>
                        <div className="flex flex-row items-center gap-1">
                            <Email width={16} height={16} />
                            <button onClick={async () => await navigator.clipboard.writeText("leonardodag123456@gmail.com")}>Email</button>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <Github width={16} height={16} />
                            <a href="https://github.com/Leonardo-Gerling/Idle_Stonks" target="_blank">Github</a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center text-center pr-3 pb-6 gap-2 h-full w-full">
                        <p className="text-xl mb-2">Attribution</p>
                        <a href="https://fontawesome.com/license/free" title="fontawesome license" target="_blank">"Font Awesome" CC BY 4.0 License</a>
                        <a href="https://mit-license.org/" title="heroicons license" target="_blank">"Heroicons" MIT License</a>
                        <a href="https://www.flaticon.com/free-icons/apple-tree" title="apple tree icons" target="_blank">Apple tree icons by Flaticon</a>
                    </div>
                </div>

                <div className="absolute bottom-0 flex items-center justify-center py-1 w-full font-medium border-t-2 border-black">
                    <p>Build with Next.js and Tailwind&#8482;</p>
                </div>
            </div>
        </div>
    )
}
