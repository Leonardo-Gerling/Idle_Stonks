import { ReactElement, useContext } from "react";

import apple_tree from "@public/apple_tree.png";
import Shop from "@components/game/shop";
import ShopContext from "@utilities/shop_context";

export default function Game(): ReactElement {
    const {apples, changePerClick, setApples} = useContext(ShopContext)

    return (
        <div>
            <Shop/>

            <div aria-label="mid-section" className="select-none grid grid-cols-2 mx-auto w-[70rem] p-40 shadow-md rounded-b-xl">
                <div className="mr-6">
                    <img className="h-96 w-96 cursor-pointer undraggable" 
                         onClick={() => setApples(+(apples + changePerClick).toFixed(2))} /* toFixed() prevents floating point errors */
                         src={apple_tree.src}
                    />
                    
                    <p className="text-white bg-[#76b02a] mt-10 text-center text-4xl py-2">{apples} Apples</p>
                </div>

                <div className="grid grid-rows-5 divide-y divide-dotted ml-6">
                    <div>Mid</div>
                    <div>Mid</div>
                    <div>Mid</div>
                    <div>Mid</div>
                    <div>Mid</div>
                </div>
            </div>
        </div>
    )
}