import axios from "axios";

export const HOST = (() => {
  return "http://34.101.145.91:8688/";
})();


const client = axios.create({
  baseURL: "http://34.101.145.91:8688/",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzMTA2NDYwOCwiZXhwIjoxNjMxMTUxMDA4fQ.oZ4o_GGYE9-KIZMlNfjB-4H5CBz0kmDcm8c37vDz2AtFDfZIqdDFB-kuNFj2zuTghfd1RF9g5xHtjPOXcuDt5A"
  },
  
}); 

// const dataCenterClient = axios.create({
//   baseURL: `${REACT_APP_DATA_CENTER}`,
//   headers: {
//     "Content-Type": "application/json",
//   },
// })

// client.interceptors.request.use(async (config) => {
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   const accessToken = urlParams.get("accessToken");
//   if (config.url?.indexOf("blob:") == 0) config.baseURL = "";
//   try {
//     let state = getState();
//     let token = state.auth.auth?.accessToken;

//     if (accessToken !== undefined && accessToken !== null) {
//       token = accessToken;
//     }

//     if (token) {
//       config.headers = {
//         ...config.headers,
//         Authorization: "Bearer " + token,
//       };
//     }

//     return config;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// });

// client.interceptors.response.use(
//   (response) => {
//     if (response.data.code === 401) {
//       if (window.self !== window.top) logout();
//       else window.location.href = "/logout";
//       // return Promise.reject();
//     }
//     return response;
//   },
//   (error) => {
//     if (error?.response?.status === 401) {
//       if (window.self !== window.top) logout();
//       else window.location.href = "/logout";
//     } else {
//       try {
//         if (error?.response?.data?.message)
//           error.message = error.response.data.message;
//       } catch (error) {}
//     }
//     return Promise.reject("");
//   }
// );

export { client };
