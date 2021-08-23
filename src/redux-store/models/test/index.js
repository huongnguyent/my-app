

export default {
  state: {
    carts: [],
    cartInfo: {},
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    getCart: (state) => {
      
    },
  }),
};
