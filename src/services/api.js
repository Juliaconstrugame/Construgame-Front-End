import axios from "axios";

const api = axios.create({
  baseURL: "http://54.173.117.126:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "xb6I9hCrRCiWRm2IKYT6witp6HmlaBvNoF_QUBI3QhAyfoek5yQmZVHktRbNtWiKnlH8tZdEplK8u_f-_DSfzXkOeOa2fHu-bFhrk462eG0VJwyfrG-stBFOAs9--eI5WYK5qkpPxhXMwMolFi3hUSXPo_iNadj7Gbu_kd4OHJTb4T1huXPrXe0usUdiLe5zHHxew0pjdOF7UYSzoM0iLo3vqF6N6LgClBx4rPw9j7GbfcEo2PFer36taEUv7TDPHxIDLtMSKvQ9dwgxKtkSGlJ_voDE_xc3dsDP663Zc0k2NYdKCskTLSxYQgzo6RQemkc3ci-UJS-1wB9AdNRh5w",
  },
});

export default api;
