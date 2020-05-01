import { serverURL } from "../../constants/api";

export class FetchRequest {
  constructor(method, path, jwt, body) {
    this.myHeader.append("Content-type", "application/json");
    this.myHeader.append("Authorization", "Bearer " + jwt);

    this.options.method = method;

    if (body != undefined) {
      this.options.body = JSON.stringify(body);
      console.log(body);
    }
    this.url = serverURL + path;
  }
  myHeader = new Headers();

  options = {
    method: "",
    mode: "cors",
    headers: this.myHeader,
  };

  async getUserInfo() {
    console.log(this.url, this.options);
    let response = await fetch(this.url, this.options);
    return response;
  }
}
