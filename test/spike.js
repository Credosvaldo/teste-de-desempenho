import http from "k6/http";

export const options = {
  stages: [
    { duration: "30s", target: 10 },
    { duration: "10s", target: 300 },
    { duration: "1m", target: 300 },
    { duration: "0s", target: 0 },
  ]
};

export default function () {
  http.post("http://localhost:3000/checkout/simple");
}
