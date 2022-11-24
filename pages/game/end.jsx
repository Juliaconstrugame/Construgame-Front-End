import Layout from "../../src/components/Layout"
import Template from "../../src/components/Elements/Template"
import Heading from "../../src/components/Elements/Heading"
import Button from "../../src/components/Elements/Button"
import { Icon } from "@iconify/react"

export default function EndMatch() 
{ 
    return (
        <Layout>
            <Template full={true}>
                <div className="h-[calc(100vh_-_128px)] col-span-full"> 
                    <div 
                        className={
                            `
                                relative
                                w-full
                                flex flex-col items-center justify-center
                                bg-[#0E4405] bg-fixed bg-top sm:bg-right-top
                                py-8
                            `
                        }
                    >
                        <div className="flex flex-col gap-6 container">
                            <div className="flex items-center justify-center">
                                <Heading level="small" customStyle="text-primary-white !text-[18px]">
                                    Partida de Estocagem Concluída.
                                </Heading>
                            </div>
                            <div>
                                <div className={
                                    `
                                        py-3
                                        rounded-t-md
                                        text-center
                                        bg-gradient-to-b 
                                        from-[#17A000] via-[#104507] to-[#0D2A08]
                                           
                                    `
                                }>
                                    <Heading level="medium" customStyle="text-primary-white">
                                        Excelente!
                                    </Heading>
                                </div>
                                <div className="rounded-md bg-primary-white px-4 py-6 flex gap-4 justify-between text-[#262626]">
                                    <div className="flex flex-col gap-2 items-center justify-center">
                                        <div className="flex gap-2 items-center justify-center">
                                            <div> 
                                                <Icon icon="icon-park-twotone:soccer-one"  height={22} />
                                            </div>
                                            <div>
                                                Gol    
                                            </div> 
                                        </div>
                                        <div className="text-center">
                                            <Heading customStyle="!text-[32px] !font-black">
                                                60
                                            </Heading>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 items-center justify-center">
                                        <div className="flex gap-2 items-center justify-center">
                                            <div> 
                                                <Icon icon="mdi:alarm-clock" height={22} />
                                            </div>
                                            <div>
                                                Tempo    
                                            </div> 
                                        </div>
                                        <div className="text-center">
                                            <Heading customStyle="!text-[32px] !font-black">
                                                06:30
                                            </Heading>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 items-center justify-center">
                                        <div className="flex gap-2 items-center justify-center">
                                            <div> 
                                                <Icon icon="mdi:trophy-outline"  height={22} />
                                            </div>
                                            <div>
                                                Pontos    
                                            </div> 
                                        </div>
                                        <div className="text-center">
                                            <Heading customStyle="!text-[32px] !font-black">
                                                60
                                            </Heading>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div 
                            className="flex-1 w-full aspect-[6/5]" 
                            style={{ 
                                backgroundImage: "url('/images/construgame-field-quiz.png')",
                                backgroundPosition: "center center", 
                                backgroundSize: "cover", 
                                backgroundRepeat: "no-repeat",
                            }}
                        />
                            
                        <div className="container">
                            <Button level="large" customStyle="w-full">
                                VER RANKING
                            </Button>
                        </div>

                    </div>
                </div>
            </Template>
        </Layout>
    )
}