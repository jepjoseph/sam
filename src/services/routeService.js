class RouteService {
  async getRoadNetwork() {
    const response = await fetch("/data/routes.json");
    /*
    console.log("Status:", response.status);
    console.log("URL:", response.url);

    const text = await response.text();

    console.log(text);

    return JSON.parse(text);
    */

    return await response.json();
  }
}

export default new RouteService();
