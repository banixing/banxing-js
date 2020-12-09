/*
 * @Description: 
 * @version: 
 * @Author: 赵秦蒲
 * @Date: 2020-12-09 23:16:20
 * @LastEditors: 赵秦蒲
 * @LastEditTime: 2020-12-09 23:23:05
 * @FilePath: /npm/bxjs/index.js
 */
function addZero(num) {
  return num > 9 ? num : "0" + num;
}

let formatter = {
  date: null,
  init(date) {
    try {
      if (date) {
        this.date = new Date(date);
      }
    } catch (error) {
      console.info(error);
    }
  },
  getDateTime() {
    let date = this.date || new Date();
    let res = "";
    res =
      date.getFullYear() +
      "-" +
      addZero(date.getMonth() + 1) +
      "-" +
      addZero(date.getDate()) +
      " " +
      addZero(date.getHours()) +
      ":" +
      addZero(date.getMinutes()) +
      ":" +
      addZero(date.getSeconds());
    return res;
  },
  getDate() {
    return this.getDateTime().split(" ")[0];
  },
  getTime() {
    return this.getDateTime().split(" ")[1];
  },
};

module.exports = formatter;
