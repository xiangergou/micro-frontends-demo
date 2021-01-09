/*
 * @Author: 轻语
 * @Date: 2021-01-09 17:51:35
 * @Last Modified by: 轻语
 * @Last Modified time: 2021-01-09 17:51:35
 */
"use strict";

import AV from "leancloud-storage";
// import store from '../store'

// let user = store.state.user ? store.state.user[0] : '0'
// console.log(user)

export function getResourcesList() {
  const grapes = new AV.Query("_File");
  grapes.descending("createdAt").toJSON();
  return grapes.find();
}
