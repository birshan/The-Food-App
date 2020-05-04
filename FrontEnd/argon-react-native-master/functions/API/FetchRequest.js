import { serverURL } from "../../constants/api";

export class FetchRequest {
  constructor(method, path, jwt) {
    this.myHeader.append("Content-type", "application/json");
    this.myHeader.append("Authorization", "Bearer " + jwt);

    this.options.method = method;
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

  async saveMeal(foodName, weight) {
    this.options.body = JSON.stringify({
      foodName: foodName,
      weight: weight,
    });
    console.log(this.url, this.options);
    try {
      return (response = await fetch(this.url, this.options));
    } catch (error) {
      console.log(error);
    }
    return;
  }

  async request() {
    let response = await fetch(this.url, this.options);
    return response;
  }
}
