import "whatwg-fetch";

class HttpService {
  getProducts = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("https://swapi.dev/api/films/").then((results) => {
        resolve(results.json());
      });
    });

    return promise;
  };
}

export default HttpService;
