import axios from "axios";

export function baixaProdutosJson() {
  return axios.get("./db.json").then((res) => {
    return res.data;
  });
}
