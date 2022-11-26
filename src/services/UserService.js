import api from "./api";
const http = require("http");
const agent = new http.Agent({ rejectUnauthorized: false });

export const getUser = async (id) => {
  const { data } = await api.get(`/v1/user/${id}`);
  return data;
};

export const getAnswersUser = async (id) => {
  const { data } = await api.get(`/v1/userAnswer?idUser=${id}`);
  return data;
};

export const getMatches = async () => {
  const { data } = await api.get("/v1/quiz/matches");
  return data;
};

export const getQuestion = async (company, game, question) => {
  const { data } = await api.get(
    `/v1/quiz/questions?company=${company}&game=${game}&question=${question}`
  );
  return data;
};

export const sendAnswer = async (values) => {
  // const { data } = await api.post(`/v1/userAnswer`, values);
  const response = await fetch(process.env.API_URL + "/v1/userAnswer", {
    method: "POST",
    agent,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: process.env.SECRET_KEY,
    },
    values,
  });

  const data = await response.json();
  return data;
};
