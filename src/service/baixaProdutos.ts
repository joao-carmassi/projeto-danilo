import axios from "axios";

export function baixaProdutos() {
  return axios.get("./db.json").then((res) => {
    return res.data;
  });
}
