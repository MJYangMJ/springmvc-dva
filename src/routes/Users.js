import React from 'react';
import UsersList from '../components/UsersList/UsersList';
import { connect } from 'dva'

const Users = ({ dispatch, user }) => {

  const { users } = user;

  const onAdd = ({ name, gender }) => {
    console.log("you are gonna add name=" + name + " gender=" + gender + " !");
    dispatch({
      type: 'user/addUser',
      payload: {
        name,
        gender,
      },
    });
  }

  const onDelete = (id) => {
    console.log("you gonna delete id=" + id + " and it is row " + (id).toString());
    dispatch({
        type: 'user/deleteUser',
        payload: id,
    });
  }

// const promise = (a) => new Promise((resolve,reject) => {
//   // let a = 2;
//   if (a%2 === 0){
//     resolve('you are fabulous!');
//   }
//   else {
//     reject('you are adorable!');
//   }
// }).then((resolve_value) => {
//   console.log('result: ' + resolve_value);
// },(reject_value)  => {
//   console.log('result: ' + reject_value);
// });
//
// promise(1);
//
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }
//
// timeout(1000).then((value) => {
//   console.log(value);
// })

// function getFoo () {
//   return new Promise(function (resolve, reject){
//     // resolve('final result in resolve function by Promise Object');
//     reject('final result in reject function by Promise Object');
//   });
// }
//
// const g = function* () {
//   try {
//     const foo = yield getFoo();
//     const foo2 = yield getFoo();
//     console.log(' foo is a ' + typeof(foo) + ' and the log in generator function g is :' + foo);
//   } catch (e) {
//     console.log(e);
//   }
// };
//
// function run (generator) {
//   const it = generator();
//
//   console.log('step one: generator is a ' + typeof(generator));
//
//   function go(result) {
//     console.log('step two: result is a ' + typeof(result));
//     if (result.done) {
//       console.log('step two.one: result.done is a ' + typeof(result.done) + ' and result.done is :' + result.done);
//       console.log('step two.one: result.value is a ' + typeof(result.value) + ' and result.value is :' + result.value);
//       return result.value;
//     }
//     else {
//       console.log('step two.two: result.done is a ' + typeof(result.done) + ' and result.done is :' + result.done);
//       console.log('step two.two: result.value is a ' + typeof(result.value) + ' and result.value is :' + result.value);
//       return result.value.then(function (value) {
//         console.log('step three: function in then when resolve.');
//         return go(it.next(value));
//       }, function (error) {
//         console.log('step four: function in then when reject.');
//         return go(it.throw(error));
//       });
//     }
//   }
//
//   go(it.next());
// }
//
// run(g);

  return (
    <>
      <h3>users here</h3>
      <UsersList onDelete={onDelete} onAdd={onAdd} users={users}/>

    </>
  );
};

export default connect(({user}) => ({
  user
}))(Users);
