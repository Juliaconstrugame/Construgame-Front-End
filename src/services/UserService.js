import api from "./api";

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
