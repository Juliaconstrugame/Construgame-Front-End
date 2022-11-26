import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Template from "../../src/components/Elements/Template";
import Layout from "../../src/components/Layout";

//Services
import { getAnswersUser, getMatches } from "../../src/services/UserService";

export async function getServerSideProps({ query }) {
  const matches = await getMatches();
  const answers = await getAnswersUser(query.id);
  const company = query.company;
  const id = query.id;
  return { props: { matches, answers, company, id } };
}

export default function Matches({ matches, answers, company, id }) {
  function MatchCard({ index, icon, title, active }) {
    return (
      <div className="flex gap-8">
        <div
          className={`w-16 aspect-square  bg-gradient-to-b ${
            active ? "from-primary-yellow" : "from-secondary-700"
          } to-secondary-200 rounded-full p-1`}
        >
          <div
            className={`aspect-square flex items-center justify-center bg-primary-white rounded-full text-others-grey-${
              active ? "900" : "100"
            }`}
          >
            <Icon
              icon={icon}
              height={32}
              color={`${active ? "#00000099" : "#0003"}`}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <span className="text-[14px]">Partida {index}</span>
          </div>
          <div className="font-semibold">{title}</div>
        </div>
      </div>
    );
  }

  matches = Array.isArray ? matches : Array(0);

  return (
    <Layout title="Partidas">
      <Template>
        <section className="flex flex-col items-center py-16">
          <div className="flex flex-col ">
            {matches.map(function ({ index, icon, title }, controlIndex) {
              const game = answers.filter(
                (answer) => answer.game === Number(index)
              );

              let gameNumber, questionNumber;
              if (game.length > 0) {
                gameNumber = game[0].game;
                questionNumber =
                  game[0].questions[game[0].questions.length - 1] + 1;
              }

              return (
                <React.Fragment key={controlIndex}>
                  {game.length === 0 && Number(index) === 1 ? (
                    <Link
                      href={`/game/question/?id=${id}&company=${company}&game=${1}&question=${1}`}
                    >
                      <MatchCard
                        index={index}
                        icon={icon}
                        title={title}
                        active={true}
                      />
                    </Link>
                  ) : game[0]?.questions.length < 8 ? (
                    <Link
                      href={`/game/question/?id=${id}&company=${company}&game=${gameNumber}&question=${questionNumber}`}
                    >
                      <MatchCard
                        index={index}
                        icon={icon}
                        title={title}
                        active={game[0]?.questions.length < 8}
                      />
                    </Link>
                  ) : (
                    <MatchCard
                      index={index}
                      icon={icon}
                      title={title}
                      active={false}
                    />
                  )}

                  <div
                    className={
                      matches.length === controlIndex + 1 ? "hidden" : ""
                    }
                  >
                    <div className="w-[3px] h-10 ml-[32px] bg-gradient-to-b from-primary-white via-primary-yellow to-secondary-200"></div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </section>
      </Template>
    </Layout>
  );
}
