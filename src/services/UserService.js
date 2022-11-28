import api from './api';

export const getUser = async (id) => {
  const { data } = await api.get(`/v1/user/${id}`);
  return data;
};

export const getAnswersUser = async (id) => {
  const { data } = await api.get(`/v1/userAnswer/?idUser=${id}`);
  return data;
};

export const getMatches = async () => {
  const { data } = await api.get('/v1/quiz/matches');
  return data;
};

export const getQuestion = async (company, game, question) => {
  const { data } = await api.get(
    `/v1/quiz/questions/?company=${company}&game=${game}&question=${question}`
  );
  return data;
};

export const sendAnswer = async (values) => {
  const { data } = await api.get('/v1/userAnswerPost/?params=' + JSON.stringify(values));
  return data;
};

export const getPoints = async (id, game) => {
  const { data } = await api.get(
    `/v1/userPointsGame/?idUser=${id}&game=${game}`
  );
  return data;
};

export const getRanking = async (type, company, game) => {
  const { data } = await api.get(
    `/v1/quiz/ranking/?company=${company}&type=${type}&game=${game}`
  );
  return data;
};

export const getRankingAdministrative = async (game) => {
  const { data } = await api.get(
    `/v1/quiz/ranking/?game=${game}&type=Administrativo`
  );
  return data;
};

export const getRankingOperation = async (game) => {
  const { data } = await api.get(
    `/v1/quiz/ranking/?game=${game}&type=Operacional`
  );
  return data;
};
