import { Icon } from "@iconify/react";
import Button from "../../src/components/Elements/Button";
import Template from "../../src/components/Elements/Template";
import Layout from "../../src/components/Layout";

export default function Play() 
{ 
    return ( 
        <Layout title="Iniciar Partida">
            <Template full = { true }>
                <div className="h-[calc(100vh_-_128px)] col-span-full"> 
                    <div 
                        className="w-full h-full flex items-center justify-center bg-[#0E4405] bg-fixed bg-top sm:bg-right-top relative"
                       
                        style={
                            {
                                backgroundImage: "url('/images/construgame-quiz-pattern.png')",
                                backgroundRepeat: "no-repeat", 
                                backgroundSize: ""
                            }
                        } >
                            <div className="flex flex-col justify-between w-full max-w-[256px] z-10"> 
                                <div>
                                    <div 
                                        className="w-full aspect-square"
                                        style={
                                            {
                                                backgroundImage: "url('/images/construgame-quiz-logo.png')",
                                                backgroundRepeat: "no-repeat", 
                                                backgroundPosition: "center center"
                                            }
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-8"> 
                                    <div>
                                        <Button level="large">
                                            <div className="flex gap-2 items-center justify-center">
                                                <div className="text-2xl">
                                                    <Icon icon="noto-v1:soccer-ball" /> 
                                                </div>
                                                <span>INICIAR PARTIDA</span>
                                            </div>
                                        </Button>
                                    </div>
                                    <div>
                                        <p className="text-primary-white font-light tracking-wide text-center text-base">
                                            Quanto mais gol você fizer no menor intervalo de tempo, maior será o seu placar !
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute aspect-square w-[320px] -mt-32 rounded-full radial-light blur-xl opacity-50">
                               
                            </div>
                     
                    </div>
                </div>
            </Template>
        </Layout>
    )
}