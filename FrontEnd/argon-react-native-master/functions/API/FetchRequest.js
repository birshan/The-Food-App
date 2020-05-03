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

  //returns the current users information: firstName, lastName and email
  async getUserInfo() {
    console.log(this.url, this.options);
    let response = await fetch(this.url, this.options);
    return response;
  }

  //returns an array with all the meals that the user logged
  async getAllMeals() {
    console.log(this.url, this.options);
    let response = await fetch(this.url, this.options);
    return response;
  }

  async deleteMeal(id) {
    this.url = this.url + "/" + id;
    console.log(this.url, this.options);
    let response = await fetch(this.url, this.options);
    return response;
  }
}
