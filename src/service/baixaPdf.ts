import axios from "axios";

export default function baixaPdfJson() {
  return axios.get("./manuais/db.json").then((res) => {
    return res.data.data;
  });
}
