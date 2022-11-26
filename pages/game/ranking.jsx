import Template from "../../src/components/Elements/Template";
import Layout from "../../src/components/Layout";
import Avatar from "../../src/components/Elements/Template/Header/Avatar";
import React from "react";
import { Icon } from "@iconify/react";
import dataService from "../../src/services/dataService";

export async function getStaticProps() {
    let resultRanking = await dataService.ranking({ company: '1', type: 'administration' })
    return {
        props: {
            resultRanking
        }
    }
}

export default function Ranking({ resultRanking }) {

    const currentPlayer = 2

    function Player({ ranking, name, points, current }) {

        const podium =
        {
            1: <Icon icon="fluent-emoji-flat:1st-place-medal" height={32} />,
            2: <Icon icon="fluent-emoji-flat:2nd-place-medal" height={32} />,
            3: <Icon icon="fluent-emoji-flat:3rd-place-medal" height={32} />,
        }

        const currentStyle = "bg-gradient-to-b from-others-yellow-300 to-transparent"

        return (
            <div className={`flex gap-4 items-center p-3 ${current && currentStyle}`}>
                <div className="flex items-center justify-center h-[32px] aspect-square">
                    <span className="font-medium text-lg">
                        {
                            (podium[ranking] !== undefined) ? podium[ranking] : ranking
                        }
                    </span>
                </div>
                <div>
                    <Avatar name={name} />
                </div>
                <div className="flex-1">
                    <span className="font-medium text-lg">
                        {name}
                    </span>
                </div>
                <div>
                    <span className="font-medium">
                        {points}
                    </span>
                </div>
            </div>
        )
    }

    function RankingList({ data }) {
        return (
            <section>
                {
                    data.map(function ({ name, points }, index) {

                        return (
                            <React.Fragment key={index}>
                                <Player ranking={index + 1} name={name} points={points} current={index === currentPlayer} />
                                {
                                    ((data.length - 1) !== index) ? <hr /> : ""
                                }
                            </React.Fragment>
                        )
                    })
                }
            </section>
        )
    }

    return (
        <Layout title="Ranking">
            <Template>
                <RankingList data={resultRanking} />
            </Template>
        </Layout>
    )
}