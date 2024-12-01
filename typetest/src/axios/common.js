
// frontend/src/api/common.js
import axios from 'axios'
import Cookies from "js-cookie";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export const HTTP = axios.create({
  baseURL: '/api/',headers:{"Content-Type": "application/json",
    "X-CSRFToken": Cookies.get('csrftoken')}})

// Экспортировать экземпляр axios
export default HTTP;
