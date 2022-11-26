import Template from "../../src/components/Elements/Template";
import Layout from "../../src/components/Layout";
import Heading from "../../src/components/Elements/Heading";
import Button from "../../src/components/Elements/Button";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import dataService from "../../src/services/dataService";
import {
  getAnswersUser,
  getQuestion,
  sendAnswer,
} from "../../src/services/UserService";

export const getServerSideProps = async ({ query }) => {
  const { id, company, game, question } = query;
  const data = await getQuestion(company, game, question);
  return { props: { id, company, game, question: data } };
};

export default function Question({ id, company, game, question }) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("TIME =>", time);
  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function QuestionProgress({ progress }) {
    return (
      <div className="w-full h-4 relative">
        <div
          className="rounded-full h-[140%] animate-spin aspect-square absolute -top-1 z-10 shadow"
          style={{ left: `calc(${progress * 10}% - 8px)` }}
        >
          <Icon icon="noto-v1:soccer-ball" height={22} />
        </div>
        <div className="w-full rounded-l-full rounded-r-full h-4 bg-others-grey-200 overflow-hidden relative">
          <div
            className="h-full bg-secondary-100"
            style={{ width: `${progress * 10}%` }}
          />
        </div>
      </div>
    );
  }

  function QuestionTitle() {
    return (
      <div className="flex gap-4 py-8">
        <div className="aspect-square h-12 bg-secondary-100 rounded-lg flex items-center justify-center text-primary-white">
          <Icon icon="charm:sound-up" height={28} />
        </div>
        <div className="flex items-center">
          <Heading level="small" customStyle="!text-[18px]">
            {question?.question ?? ""}
          </Heading>
        </div>
      </div>
    );
  }

  function QuestionList({ data, selectedQuestion, setSelectedQuestion }) {
    return (
      <div className="grid grid-cols-2 gap-6">
        {data.map(function ({ url, text }, index) {
          const styleImage = {
            backgroundImage: `url('/images/questions/${url}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          };

          return (
            <div
              className={`
                                    bg-others-grey-100 
                                    outline outline-2 
                                    ${
                                      selectedQuestion === index
                                        ? "outline-[#00FF57]"
                                        : "outline-others-grey-200 "
                                    }
                                    flex flex-col gap-4
                                    rounded-2xl 
                                    p-4 
                                `}
              key={`question-${index}`}
              onClick={() => setSelectedQuestion(index)}
            >
              <div className="">
                <div
                  className="h-full aspect-square max-h-36 mx-auto"
                  style={styleImage}
                />
              </div>
              <div className="flex items-center justify-center">
                <p className="font-medium text-base text-others-grey-900">
                  {text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  const sendQuestionAnswer = async () => {
    try {
      // await sendAnswer({
      //   idUser: id,
      //   game: Number(game),
      //   numberAnswer: Number(question.questionNumber),
      //   alternative: [selectedQuestion.toString()],
      //   time,
      // });

      const response = await sendAnswer({
        idUser: "63696814a41789eb7a0028e1",
        game: 1,
        numberAnswer: 6,
        alternative: ["1"],
        time: 5,
      });
      console.log("RESPONSE =>", response);

      setTime(0);
    } catch (error) {
      if (error.response) console.log("ERROR DATA:", error.response.data);
      else console.log("ERROR:", error);
    }
  };

  return (
    <Layout title="Questão">
      <Template>
        <div>
          <div>
            <QuestionProgress
              progress={Number(question?.questionNumber ?? "0")}
            />
            <QuestionTitle>{question?.question ?? ""}</QuestionTitle>
          </div>
          <div className="flex flex-col gap-8">
            <QuestionList
              data={question.alternative}
              selectedQuestion={selectedQuestion}
              setSelectedQuestion={setSelectedQuestion}
            />
            <div>
              <span onClick={sendQuestionAnswer}>
                <Link
                  href={`${
                    question?.questionNumber === 8
                      ? "/game/end"
                      : `/game/question/?id=${id}&company=${company}&game=${game}&question=${
                          Number(question.questionNumber) + 1
                        }`
                  }`}
                  passHref
                >
                  <Button
                    level="large"
                    style={selectedQuestion !== null ? "fill" : "inactive"}
                  >
                    CONTINUAR
                  </Button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </Template>
    </Layout>
  );
}
