import { client } from "../client/request";
import {
  TEST
} from "../client/api";

export default {
  delete: ({ id, ...payload }) => {
    return new Promise((resolve, reject) => {
      client
        .delete(`${TEST}/${id}`)
        .then((s) => {
          if (s?.data?.code === 1 && s?.data?.data) {
            resolve(s);
          } else reject(s?.data);
        })
        .catch((e) => {
          reject(e); 
        });
    });
  },
  create: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .post(`${TEST}`, payload)
        .then((s) => {
          if (s?.data?.code === 1 && s?.data?.data) {
            resolve(s?.data);
          } else reject(s?.data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },

  update: ({ id, ...payload }) => {
    return new Promise((resolve, reject) => {
      client
        .put(`${TEST}/${id}`, payload)
        .then((s) => {
          if (s?.data?.code === 1 && s?.data?.data) {
            resolve(s?.data);
          } else reject(s?.data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  search: (param = {}) => {
    return new Promise((resolve, reject) => {
      client
        .get(
            `${TEST}`
        )
        .then((s) => {
          if (s?.data?.code === 1 && s?.data?.data) {
            resolve(s?.data);
          } else reject(s?.data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },


};
