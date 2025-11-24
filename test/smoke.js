// import { describe, it, expect as expexct } from "jest";

// describe("Smoke Test", () => {
//   it("should return 200 for the /heavy endpoint", async () => {
//     const a = 10 + 5;
//     expexct(a).toBe(15);
//   });
// });

import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: "30s", target: 1 },
  ]
};

export default function () {
    const res = http.get('http://localhost:3000/health');
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}