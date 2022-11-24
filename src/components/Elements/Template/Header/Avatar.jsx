import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function Avatar({ name }) 
{ 
    
    
    const [avatar, setAvatar] = useState(false); 

    useEffect(function() { 
       
        const avatarStyle = (name) ? 'initials' : 'big-ears-neutral'  
        const avatarSeed = (avatarStyle === 'initials') ? name : Math.random()

        setAvatar(`https://avatars.dicebear.com/api/${avatarStyle}/${name || btoa(avatarSeed)}.svg`)

    }, [name])

    if(avatar ===  false) 
    { 
        return (
            <div className="aspect-square w-12 rounded-full flex items-center justify-center overflow-hidden p-1 drop-shadow-md bg-primary-white">
                <Icon icon="line-md:loading-twotone-loop" />
            </div>
        )
    }else{      
        return ( 
            <div className="aspect-square w-12 rounded-full flex items-center justify-center overflow-hidden p-1 drop-shadow-md bg-primary-white">
                <div 
                    className='w-full h-full rounded-full'
                    style={
                        {
                            backgroundImage: `url('${avatar}')`,
                            backgroundPosition: "center center", 
                            backgroundSize: "cover", 
                            backgroundRepeat: "no-repeat"
                        }
                    }
                /> 
    
                
            </div>
        )
    }
}
