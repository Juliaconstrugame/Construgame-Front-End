import Image from "next/image"

export default function Logo() 
{ 
    return (
        <div className="aspect-square w-12 p-1 cursor-pointer">
            <div className='relative w-full h-full'>
                <Image src="/images/construgame-logo-32x32.png" alt="Construgame" sizes="100% 100%" fill />
            </div>
        </div>
    )
}
