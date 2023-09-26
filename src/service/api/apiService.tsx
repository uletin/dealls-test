class apiService {
  get = (endpoint : any, headers:any,) => {
    const response = fetch(`https://dummyjson.com/${endpoint}`, {
      method: "GET",
      headers: headers,
    }).then(async (response) => {
      try {
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    });

    return response;
  };

  getById = (endpoint:any, headers:any, id:any) => {
    const response = fetch(`https://dummyjson.com/${endpoint}/${id}`, {
      method: "GET",
      headers: headers,
    }).then(async (response) => {
      try {
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    });

    return response;
  };

  getByParams = (endpoint:any, headers:any, params:string) => {
    const response = fetch(`https://dummyjson.com/${endpoint}${params}`, {
      method: "GET",
      headers: headers,
    }).then(async (response) => {
      try {
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    });

    return response;
  };

  
}

export default apiService;
