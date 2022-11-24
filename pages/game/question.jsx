import Template from "../../src/components/Elements/Template";
import Layout from "../../src/components/Layout";
import Heading from "../../src/components/Elements/Heading"
import Button from "../../src/components/Elements/Button"

import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Question() 
{ 

    const [selectedQuestion, setSelectedQuestion] = useState(null);

    function QuestionProgress({ progress }) 
    {     

        progress = progress || "0"

        return ( 
            <div className="w-full h-4 relative"> 
                <div 
                    className="rounded-full h-[140%] animate-spin aspect-square absolute -top-1 z-10 shadow"
                    style={{ left: `calc(${progress}% - 8px)`}}>
                    <Icon icon="noto-v1:soccer-ball" height={22}/> 
                </div>
                <div className="w-full rounded-l-full rounded-r-full h-4 bg-others-grey-200 overflow-hidden relative"> 
                    <div className="h-full bg-secondary-100"
                    style={{ width: `${progress}%`}} />
                </div>
            </div>

        )
    }
    function QuestionTitle({ children })
    { 
        return ( 
            <div className="flex gap-4 py-8"> 
                <div className="aspect-square h-12 bg-secondary-100 rounded-lg flex items-center justify-center text-primary-white"> 
                    <Icon icon="charm:sound-up" height={28} />
                </div>
                <div className="flex items-center"> 
                    <Heading level="small" customStyle="!text-[18px]">
                        Você vai iniciar uma obra, qual deve ser feito primeiro?
                    </Heading>
                </div>
            </div>
        )
    }
    function QuestionList({ data, selectedQuestion, setSelectedQuestion}) 
    { 
        return ( 
            <div className="grid grid-cols-2 gap-6">
                { 
                    data.map(function({image, text}, index) { 

                        const styleImage = 
                        { 
                            backgroundImage: `url('/images/questions/${image}.png')`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center", 
                            backgroundSize: "cover"
                        }

                        return (
                            <div 
                            className={
                                `
                                    bg-others-grey-100 
                                    outline outline-2 
                                    ${(selectedQuestion === index) ? 'outline-[#00FF57]' : 'outline-others-grey-200 '}
                                    flex flex-col gap-4
                                    rounded-2xl 
                                    p-4 
                                `
                            } 
                            key={`question-${index}`} 
                            onClick={() => setSelectedQuestion(index)}
                            >
                                <div className="">
                                    <div className="h-full aspect-square max-h-36 mx-auto" style={styleImage} />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-medium text-base text-others-grey-900">
                                        { text }
                                    </p>
                                </div>
                            </div> 
                        )
                    })
                }                              
            </div>

        )
    }

    const questionData = 
    [
        { 
            'image': '1', 
            'text': 'Quantidade de materiais'
        },
        { 
            'image': '2', 
            'text': 'Lista de Equipamentos'
        },
        { 
            'image': '3', 
            'text': 'Tempo médio das etapas'
        },
        { 
            'image': '4', 
            'text': 'Orçamento'
        }
    ]

    const buttonStyle = (selectedQuestion !== null) ? 'fill' : 'inactive'

    return ( 
        <Layout title="Questão">
            <Template>
                
                <div>
                    <div>
                        <QuestionProgress progress="0" />
                        <QuestionTitle>
                            Você vai iniciar uma obra, qual deve ser feito primeiro?
                        </QuestionTitle>
                    </div>
                    <div className="flex flex-col gap-8">
                        <QuestionList data={questionData} selectedQuestion={selectedQuestion} setSelectedQuestion={setSelectedQuestion} />
                        <div> 
                            <Button level="large" style={buttonStyle}>
                                CONTINUAR
                            </Button>
                        </div>
                    </div>
                </div>
            </Template>
        </Layout>
    )
}