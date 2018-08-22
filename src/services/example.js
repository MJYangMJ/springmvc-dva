import request from '../utils/request';

export function queryquery() {
  // return request('/api/users');
  console.log('queryquery function here!!');
  // return request('http://localhost:8080/test/users',{
  return request('/api/test/users',{
    // credentials: 'same-origin',
    method: 'POST',
    dataType: 'json',
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'param_one': 'hahahah!'
    }),
    // body:'param_one=hahaha',
  });
}
