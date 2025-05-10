"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { QuestionData, Info } from "../config/data"

interface QuestionsInfo {
    id : number
    questions : string
    content : React.JSX.Element
}

export const Frequent = () => {
    
    const [selectedInfo, setSelectedInfo] =  useState <QuestionsInfo | null> (null);
    const [isActive, setIsActive] = useState <QuestionsInfo | null> (null);
    const [Info, setInfo] = useState <QuestionsInfo[]> ([
        {
            id : 1,
            questions : 'How does Order.uk work?',
            content : <QuestionOne /> 
        }, 
        {
            id : 2,
            questions : 'What payment methods are accepted?',
            content : <QuestionTwo /> 
        },
        {
            id : 3,
            questions : 'Can i track my order in real time?',
            content : <QuestionThree /> 
        },
        {
            id : 4,
            questions : 'Is Order.uk in my area?',
            content : <QuestionFour /> 
        },
    ]);

    useEffect(() => {
        if(Info.length > 0){
            setSelectedInfo(Info[0])
        }
    }, [Info]);

    const handleClick = (menu : React.SetStateAction <QuestionsInfo | null>) => {
        setIsActive(menu)
        setSelectedInfo(menu)
    };


    return (
        <div className="h-full bg-blue1 mx-auto my-4 rounded-lg max-sm:bg-white">
            <div className="questioncontainer flex gap-10 py-16 px-8 max-sm:block max-sm:py-2">
                <div className="mapcontainer w-[300px] max-sm:w-full">
                    {Info.map((items) => (
                        <ul key={items.id} className="text-white max-sm:text-black my-10 max-sm:my-5">
                            <li onClick={() => handleClick(items)} className={`${isActive?.questions === items.questions ? ' text-black rounded-full py-4 px-2 text-center bg-orange1 font-bold' : ""} cursor-pointer text-center text-[14px] font-bold`}>{items.questions}</li>
                        </ul>
                    ))}
                </div>

                <div className="h-full">
                    {selectedInfo?.content}
                </div>
            </div>
        </div>
    )
};



// Questions Component below from one to four
// Qustion 1
export const QuestionOne = () => {
    return (
        <div className="text-white w-[310px] h-[400px] max-sm:bg-blue1 max-sm:h-full max-sm:pl-10 max-sm:py-2 border-l border-grey1 rounded-md">
            <div className="flex text-center justify-around max-sm:block mx-auto sm:px-8">
                {QuestionData.map((items, index) => (
                    <div key={index} className="bg-grey1 w-[200px] h-[260px] my-10 rounded-lg mx-4">
                        <h2 className="text-black font-bold mt-2">{items.title}</h2>
                        <Image 
                        src={items.image}
                        alt="images"
                        width={128}
                        height={128}
                        className="mx-auto my-4"
                        />
                        <p className="text-black font-medium text-sm w-[184px] mx-auto">{items.text}</p>
                    </div>
                ))}
            </div>
            <p className="text-center w-[625px] h-[72px] text-md mx-10 max-sm:hidden">{Info}</p>
        </div>
    )
};

// Question 2
export const QuestionTwo = () => {
    return (
        <div></div>
    )
};

// Question 3
export const QuestionThree = () => {
    return (
        <div></div>
    )
};

// Question 4
export const QuestionFour = () => {
    return (
        <div></div>
    )
};