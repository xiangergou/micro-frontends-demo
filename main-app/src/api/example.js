import { fetch } from "@/utils/fetch";

export const exampleApi = {
  requestPath: "example",
  queryMethod: "list",
  isMock: true,
  list(params = {}) {
    return fetch(
      this.requestPath,
      {
        method: this.queryMethod,
        params
      },
      {
        isMock: this.isMock
      }
    );
  }
};
