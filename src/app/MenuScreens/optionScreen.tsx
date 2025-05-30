import Image from "next/image"
import { useEffect, useState } from "react"
import { PizzaDetails, PriceDetails } from "../config/specialData"
import { Click } from "../config/specialData"

export const PizzaOption = () => {
    const [click, setClick] = useState<Click[]>(PriceDetails);
     const [isActive, setIsActive] = useState<Click | null>(null)
    const [selectedItem, setSelectedItem] = useState<Click | null>(null)

    useEffect(() => {
        if(click.length > 0){
            setSelectedItem(click[0])
        }
    }, [click])

    const handleClick = (menu : React.SetStateAction<Click | null>) => {
        setSelectedItem(menu)
        setIsActive(menu)
    };


    return (
        <>
        <div className="my-3">
            <div className="flex justify-between items-center px-4">
                <h1 className="text-2xl font-semibold ">Pizza</h1>
                <div className="relative">
                    <input type="text" 
                    className="w-[274px] h-[52px] border border-white5 bg-white4 rounded-full pl-6 max-sm:w-[200px]"
                    placeholder="Sort by Pricing"/>
                    <Image 
                    src={'/Forward Button.svg'}
                    alt="down"
                    width={30}
                    height={30}
                    className="absolute bottom-3 left-28 ml-28 bg-gray-500 rounded-full cursor-pointer max-sm:ml-10"
                    />
                </div>
            </div>
            <div className="mx-auto max-sm:w-[330px]">
                {PizzaDetails.map((items, index) => (
                <div className="h-[403px] w-[754px] my-4 shadow-lg shadow-white2 rounded-sm max-sm:w-[330px]" key={index}>
                    <div className="flex justify-between items-center px-8 py-8 max-sm:px-4 max-sm:ml-auto">
                        <div>
                            <h1 className="font-semibold text-2xl py-6">{items.heading}</h1>
                            <p className="h-[79px] w-[315px] font-medium text-md max-sm:w-[230px]">{items.details}</p>
                        </div>

                        <div>
                            <Image 
                            src={items.image}
                            alt="pizza image"
                            width={191}
                            height={191}
                            /> 
                        </div>
                    </div>

                    <div className="gridformat grid grid-cols-3 px-8 gap-y-3 max-sm:grid-cols-2 max-sm:px-2">
                        {PriceDetails.map((details, index) => (
                            <div className={`w-[192px] h-[58px] font-bold py-4 px-3 border border-white2 rounded-md text-sm cursor-pointer max-sm:w-[150px] ${isActive?.id === details.id ? 'bg-blue1 text-white' : ''}`} key={index} onClick={() => handleClick(details)}>{details.Size} <span className="ml-4 bg-green1 py-3 px-6 rounded-md max-sm:ml-2 max-sm:px-2">${details.Price}</span></div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}