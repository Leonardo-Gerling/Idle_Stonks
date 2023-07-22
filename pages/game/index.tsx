import { ReactElement, useState } from "react";
import apple_tree from "../../public/apple_tree.png";

export default function Game(): ReactElement {
    const [apples, setApples] = useState(0)

    return (
        <div className="grid grid-cols-3">
            <div aria-label="shop" className="select-none grid auto-cols-fr divide divide-solid m-0 max-w-[20vh]">
                <div>Shop</div>
                <div>Shop</div>
                <div>Shop</div>
                <div>Shop</div>
                <div>Shop</div>
                <div>Shop</div>
                <div>Shop</div>
                <div>Shop</div>
                <div>Shop</div>
                <div>Shop</div>
            </div>

            <div aria-label="mid-section" className="select-none grid grid-cols-2 mx-auto w-[70rem] p-40 shadow-md rounded-b-xl">
                <div className="mr-6">
                    <img className="h-96 w-96 cursor-pointer" onClick={() => setApples(apples + 1)} src={apple_tree.src}/>
                    
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

            <div aria-label="left-section" className="grid grid-rows-4">
                <div>Left</div>
                <div>Left</div>
                <div>Left</div>
                <div>Left</div>
            </div>
        </div>
    )
}