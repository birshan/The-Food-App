export class UserRequest {
  constructor(method, path, body) {
    this.options.method = method;

    if (body != undefined) {
      this.options.body = JSON.stringify(body);
      console.log(body);
    }
    this.url = "http://192.168.43.81:8080/" + path;
  }
  options = {
    method: "",
    mode: "cors",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  async createUser() {
    console.log(this.url, this.options);
    let response = await fetch(this.url, this.options);
    return response;
  }

  async userLogin() {
    let response = await fetch(this.url, this.options);
    return response;
  }
}