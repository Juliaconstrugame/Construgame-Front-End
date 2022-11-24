import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../Button";
import Heading from "../Heading"

export default function Goal({ children }) 
{ 
    const [goal, setGoal] = useState(false);

    const goalStyle = 
    { 
        backgroundImage: "url('/images/goal-ball.png')", 
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "right top"
    }

    return ( 
        <div className={`goal ${(goal) ? 'isGoal' : ''}`} style={goalStyle}> 
            <div className="p-6 flex flex-col gap-4 z-50 relative">
                <div className="flex flex-col gap-2"> 
                    <div className="flex items-center gap-2 text-primary-white">
                        <Icon icon="lucide:check-circle" height={24} />
                        <Heading customStyle="!font-semibold text-[28px]">GOL !</Heading> 
                    </div>
                    <div> 
                        <p className="leading-tight text-[14px] text-primary-white">
                            { children }
                        </p>
                    </div>
                </div>
                <div>
                    <a onClick={() => setGoal(false)}>
                        <Button level="large">
                            CONTINUAR
                        </Button>
                    </a>
                </div>
            </div>
            <div className="absolute top-0 w-full h-full  rounded-full radial-light blur-xl opacity-50 z-0" />
                            
        </div>
    )
}