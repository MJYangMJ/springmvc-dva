import { queryquery } from '../services/example'

export default {
  namespace: 'user',
  state: {
    users: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/Users') {
          console.log('you are now fetched under /Users location!');
          const payload = location.query || { page: 1, pageSize: 10 };
          console.log('location.query is ' + location.query);
          console.log('you are now resolved payload which is payload' + getAllPropsInObj(payload));
          dispatch({
            type: 'bridge',
            payload: payload,
          })
          console.log('after dispatch now waiting!!!!');
        }
      })
    },
  },
  effects: {
    *bridge( { payload = {} } , { call, put }){
      // const a = yield 1;
      // const step_one = (beforeAddUser, payload);
      // console.log(getAllPropsInObj(step_one));
      // const step_one = beforeAddUser(payload, 1);
      // const step_two = yield call (beforeAddUser, payload, 2)
      // console.log('type of step_one: ' + typeof(step_one) + ' and value is ' + step_one);
      // console.log('type of step_two: ' + typeof(step_two) + ' and value is ' + step_two);
      const { name, gender, page, pageSize } = payload;
      console.log('bridge -> name:' + name + ' gender:' + gender + ' page:' + page + ' pageSize:' + pageSize);
      console.log('payload is ' + getAllPropsInObj(payload));
      const newUser = yield call(queryquery);
      // if (step_two){
        yield put({
          type: 'query',
          payload: {
            users: [newUser.data],
          }
        });
      // }

    }
  },
  reducers: {
    deleteUser(state, { payload: id } ){
      console.log('current state is ' + state.users.map((s) => getAllPropsInObj(s)));
      console.log('you are deleting user whose id is ' + id);
      state.users = [...state.users.filter(user => user.id !== id )];
      console.log('after delete ,current state is ' + state.users.map((s) => getAllPropsInObj(s)));
      return {...state};
    },
    addUser(state, { payload: { name, gender } }){
      console.log('current state is ' + state.users.map((s) => getAllPropsInObj(s)));
      console.log('you are adding user whose name is ' + name + ' and gender is ' + gender);
      // let keys = state.map(parseInt((obj) => parseInt(obj.key, 10),10));
      let keys, current;
      if (state.users.length !== 0 ){
        keys = [...state.users.map((obj) => parseInt(obj.key, 10))];
        console.log('keys list is ' + keys);
        keys = keys.sort((a,b) => a - b);
        console.log('after sort is ' + keys);
        current = keys[keys.length-1] + 1;
        console.log('current key '+ keys[keys.length-1] + ' ,so I should add ' + current);
      }
      else {
        keys = 0;
        current = 1;
      }
      // const newUser = [{
      //   id: current,
      //   name: name,
      //   gender: gender,
      //   key: current.toString(),
      // }]
      const newUser = {
        id: current,
        name: name,
        gender: gender,
        key: current.toString(),
      }
      // console.log('new user is ' + newUser.map((nu) => getAllPropsInObj(nu)));
      // state.push(newUser);
      // state.users = [...state.users.concat(newUser)];
      state.users = [...state.users, newUser];
      console.log('after add ,current state is ' + state.users.map((s) => getAllPropsInObj(s)));
      return {...state};
    },
    query(state, { payload }){
      console.log('query function here!');
      const us = [
        {
          id: 1,
          name: 'yang',
          gender: 'male',
          key: '1',
        },
        {
          id: 2,
          name: 'chen',
          gender: 'female',
          key: '2',
        },
        {
          id: 3,
          name: 'wang',
          gender: 'male',
          key: '3',
        },
      ];
      // const us = queryquery();
      // console.log('after queryquery' + us);
      // state.users = state.users.concat(payload.users);
      // return {...state};
      state.users = [...state.users, ...payload.users];
      return { ...state };
      // const users = [payload];
      // return { ...state, users };
      // return {
      //   ...state,
      //   ...payload,
      // }
    },
  }
}

function beforeAddUser( { name, gender } , a){
  console.log('beforeAddUser name:' + name + ' gender:' + gender + ' a=' + a);
  if (name === 'yang' && gender === 'male')
    return false;
  return true;
}

function getAllPropsInObj(obj){
  let res = '';
  for (let o in obj){
    res += o.toString() + '=' + obj[o].toString() + ' ';
  }
  return res;
}
