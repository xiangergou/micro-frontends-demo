/*
 * @Author: 轻语
 * @Date: 2021-01-09 17:50:56
 * @Last Modified by: 轻语
 * @Last Modified time: 2021-01-09 17:51:43
 */

import { fetch } from "@/utils/fetch";

export const loginApi = {
  /* 登录获取sessionId */
  login(params = {}) {
    return fetch({
      url: "/user/login",
      method: "post",
      params
    });
  },

  getInfo(params = {}) {
    return fetch({
      url: "/user/getInfo",
      method: "post",
      params
    });
  },
  /* 退出系统 */
  logout(params = {}) {
    return fetch({
      url: "/user/logout",
      method: "post",
      params
    });
  }
};
