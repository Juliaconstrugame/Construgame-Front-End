import Template from "../../src/components/Elements/Template";
import Layout from "../../src/components/Layout";
import Heading from "../../src/components/Elements/Heading"
import Button from "../../src/components/Elements/Button"

import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from 'next/link';
import dataService from "../../src/services/dataService";

async function getData({ company, game, question }) {
    let resultQuestions = await dataService.questions({ company, game, question })
    return resultQuestions
}

export async function getStaticProps() {

    let resultQuestions = await getData({ company: 1, game: 1, question: 3 })
    return {
        props: {
            resultQuestions
        }
    }
}

export default function Question({ resultQuestions }) {

    const [selectedQuestion, setSelectedQuestion] = useState(null);

    function QuestionProgress({ progress }) {

        progress = progress || "0"

        return (
            <div className="w-full h-4 relative">
                <div
                    className="rounded-full h-[140%] animate-spin aspect-square absolute -top-1 z-10 shadow"
                    style={{ left: `calc(${progress}% - 8px)` }}>
                    <Icon icon="noto-v1:soccer-ball" height={22} />
                </div>
                <div className="w-full rounded-l-full rounded-r-full h-4 bg-others-grey-200 overflow-hidden relative">
                    <div className="h-full bg-secondary-100"
                        style={{ width: `${progress}%` }} />
                </div>
            </div>

        )
    }
    function QuestionTitle({ children }) {
        return (
            <div className="flex gap-4 py-8">
                <div className="aspect-square h-12 bg-secondary-100 rounded-lg flex items-center justify-center text-primary-white">
                    <Icon icon="charm:sound-up" height={28} />
                </div>
                <div className="flex items-center">
                    <Heading level="small" customStyle="!text-[18px]">
                        {resultQuestions.question}
                    </Heading>
                </div>
            </div>
        )
    }
    function QuestionList({ data, selectedQuestion, setSelectedQuestion }) {
        return (
            <div className="grid grid-cols-2 gap-6">
                {
                    data.map(function ({ url, text }, index) {
                        const styleImage =
                        {
                            backgroundImage: `url('/images/questions/${url}')`,
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
                                        {text}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        )
    }

    const questionData = resultQuestions.alternative

    const buttonStyle = (selectedQuestion !== null) ? 'fill' : 'inactive'

    return (
        <Layout title="Questão">
            <Template>

                <div>
                    <div>
                        <QuestionProgress progress="2" />
                        <QuestionTitle>

                        </QuestionTitle>
                    </div>
                    <div className="flex flex-col gap-8">
                        <QuestionList data={questionData} selectedQuestion={selectedQuestion} setSelectedQuestion={setSelectedQuestion} />
                        <div>
                            <Link href={{
                                pathname: '/game/question'
                            }} passHref>
                                <Button level="large" style={buttonStyle}>CONTINUAR</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Template>
        </Layout>
    )
}