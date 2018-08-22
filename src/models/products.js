export default {
  // console.log("here is model function??");
  namespace: 'products',
  state: [{ name: 'dva', id: 1 },
     { name: 'antd', id: 2 },
   ],
  reducers: {
    'delete'(state, { payload: id }) {
      console.log("executing reducer delete!");
      console.log("state:" + state);
      console.log("payload:" + {payload: id}.payload);
      return state.filter(item => item.id !== id);
    },
  },
  // effects:{
  //   *deleteAfter1Second({payload}, { put, call }) {
  //     yield call(delay, 1000);
  //     yield put({ type: 'products/delete', payload });
  //   }
  // }
};
