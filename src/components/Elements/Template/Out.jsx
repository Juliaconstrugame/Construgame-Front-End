import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../Button";
import Heading from "../Heading"

export default function Out({ children }) 
{ 
    const [out, setOut] = useState(false);

    const outStyle = 
    { 
        backgroundImage: "url('/images/out-ball.png')", 
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "right top"
    }

    return ( 
        <div className={`out ${(out) ? 'isOut' : ''}`} style={outStyle}> 
            <div className="p-6 flex flex-col gap-4 z-50 relative">
                <div className="flex flex-col gap-2"> 
                    <div className="flex items-center gap-2 text-[#B00E0E]">
                        <Icon icon="lucide:check-circle" height={24} />
                        <Heading customStyle="!font-semibold text-[28px]">FORA !</Heading> 
                    </div>
                    <div> 
                        <p className="leading-tight text-[14px] text-[#B00E0E] font-medium">
                            { children }
                        </p>
                    </div>
                </div>
                <div>
                    <a onClick={() => setOut(false)}>
                        <Button level="large" custom="!bg-[#B00E0E]">
                            ENTENDI
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}