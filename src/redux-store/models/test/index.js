import testProvider from "../../../data-access/test-provider";

export default {
  state: {
    listTruyen: [],
    currentItem: {},
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    getTruyen: (state) => {
      testProvider
        .search()
        .then((s) => {
          let listTruyen = (s?.data?.content || []);

          dispatch.test.updateData({
            listTruyen: [...listTruyen],
            
          });
        })
        .catch((e) => {
          dispatch.test.updateData({
            listTruyen: [],
          });
        });
    },
  }),
};
