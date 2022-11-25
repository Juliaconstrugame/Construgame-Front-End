import { Icon } from "@iconify/react";
import React from "react";
import Template from "../../src/components/Elements/Template";
import Layout from "../../src/components/Layout";

//Services
import dataService from "../../src/services/dataService";

export async function getStaticProps() {
    let matches = await dataService.match()

    return {
        props: {
            matches
        }
    }
}

export default function Matches({ matches }) {
    function MatchCard({ index, icon, title }) {
        return (
            <div className="flex gap-8">
                <div className="w-16 aspect-square  bg-gradient-to-b from-primary-yellow to-secondary-200 rounded-full p-1">
                    <div className="aspect-square flex items-center justify-center bg-primary-white rounded-full text-others-grey-900">
                        <Icon icon={icon} height={32} />
                    </div>

                </div>
                <div className="flex flex-col justify-center">
                    <div>
                        <span className="text-[14px]">
                            Partida {index}
                        </span>
                    </div>
                    <div className="font-semibold">
                        {title}
                    </div>
                </div>
            </div>
        )
    }
    matches = (Array.isArray) ? matches : Array(0)

    return (
        <Layout title="Partidas">
            <Template>
                <section className="flex flex-col items-center py-16">
                    <div className="flex flex-col ">
                        {
                            matches.map(function ({ index, icon, title }, controlIndex) {
                                return (
                                    <React.Fragment key={controlIndex}>
                                        <MatchCard
                                            index={index}
                                            icon={icon}
                                            title={title}
                                        />

                                        <div className={(matches.length === controlIndex + 1) ? 'hidden' : ''}>
                                            <div className="w-[3px] h-10 ml-[32px] bg-gradient-to-b from-primary-white via-primary-yellow to-secondary-200">
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </section>
            </Template>
        </Layout>
    )
}