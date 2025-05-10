import { useState, useEffect } from "react";
import { Frequent } from "./InfoScreens/Frequent";
import { Company } from "./InfoScreens/Company";
import { Program } from "./InfoScreens/Program"
import { Support } from "./InfoScreens/Support";

interface InformationOptions {
    id : number
    options : string
    content : React.JSX.Element
}

export const Kyc = () => {
    const [selectedOption, setIsSelectedOption] = useState<InformationOptions | null>(null)
    const [isActive, setIsActive] = useState <InformationOptions | null> (null)
    const [InfoOption, setInfoOption] = useState <InformationOptions[]> ([
        {
            id : 1,
            options : 'Frequent Questions',
            content : <Frequent />
        },
        {
            id : 2,
            options : 'Who we are ? ',
            content : <Company /> 
        },
        {
            id : 3,
            options : 'Partner Program',
            content : <Program /> 
        },
        {
            id : 4,
            options : 'Help & Support',
            content : <Support /> 
        }
    ]);

    useEffect(() => {
        if(InfoOption.length > 0){
            setIsSelectedOption(InfoOption[0])
        }
    }, [InfoOption]);

    const handleClick = (menu : React.SetStateAction<InformationOptions | null>) => {
        setIsSelectedOption(menu)
        setIsActive(menu)
    };

    return (
        <section>
            <div className="flex justify-between px-10 max-w-[1200px] mx-auto my-5">
                <div className="font-bold text-xl py-2">
                    Know more about us!
                </div>
                
                <div className="flex items-center overflow-x-auto scrollable max-sm:hidden">
                    {InfoOption.map((items, index) =>  (
                        <ul key={index} className="items-center gap-1 px-8 text-sm font-medium">
                            <li onClick={() => handleClick(items)}  className={`${isActive?.options === items.options ? ' text-orange1 rounded-full py-2 px-6 border-2 border-orange1' : ""} cursor-pointer`}>
                                {items.options}
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
            <main className="max-w-[1200px] mx-auto">
                {selectedOption?.content}
            </main>
        </section>
    )
}