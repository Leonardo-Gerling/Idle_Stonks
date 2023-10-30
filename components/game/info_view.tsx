import { ReactElement, useContext } from "react"
import { Github, Mail, X } from "@geist-ui/icons"

import ShopContext from "@utilities/shop_context"
import NextJS from "@components/game/nextjs"
import Tailwind from "@components/game/tailwind"

export default function InfoView(): ReactElement {
    const { collapsedInfo, setCollapsedInfo } = useContext(ShopContext)

    return (
        <section aria-label="info-view" className={`absolute top-0 h-[20rem] inset-x-4 bg-green-700 text-white z-20 transition-transform duration-700 ease-in-out rounded-b-lg ${collapsedInfo ? "translate-y-[-20rem]": ""}`}>
            <div className="relative h-full w-full">
                <button className="absolute top-2 right-3" onClick={() => setCollapsedInfo(true)}>
                    <X size={50} />
                </button>
                <div className="flex flex-col pt-16 pb-2 h-full w-full">
                    <div className="flex flex-row justify-between text-center h-full w-full">
                       <div aria-label="socials" className="flex flex-col justify-start items-center gap-2 h-full w-full">
                            <p className="text-xl mb-1">Socials</p>
                            <div className="flex flex-row items-center gap-1">
                                <Mail size={22} />
                                <button onClick={async () => await navigator.clipboard.writeText("leonardodag123456@gmail.com")}>Email</button>
                            </div>
                            <div className="flex flex-row items-center gap-1">
                                <Github size={22} />
                                <a href="https://github.com/Leonardo-Gerling/Idle_Stonks" target="_blank">Github</a>
                            </div>
                       </div>
                       <div aria-label="attribution" className="flex flex-col justify-start items-center text-center gap-1 h-full w-full">
                            <p className="text-xl mb-1">Attribution</p>
                            <a href="https://mit-license.org/" title="geist-ui license" target="_blank">"geist-ui" MIT License</a>
                            <a href="https://www.flaticon.com/free-icon/apple-tree_1676863?related_id=1676812&origin=search" title="apple tree icon" target="_blank">Apple tree icon by Flatpik - Flaticon</a>
                        </div>
                    </div>
                    <div aria-label="build-with" className="flex flex-col items-center justify-center h-full w-full gap-4">
                        <p className="text-xl mb-1">Build With</p>
                        <div className="flex flex-row justify-evenly w-full">
                            <a href="https://nextjs.org/">
                                <NextJS height={15} />
                            </a>
                            <a href="https://tailwindcss.com/">
                                <Tailwind height={15} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
