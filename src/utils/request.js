import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  console.log(response);
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  // const us = [
  //   {
  //     id: 1,
  //     name: 'yang',
  //     gender: 'male',
  //     key: '1',
  //   },
  //   {
  //     id: 2,
  //     name: 'chen',
  //     gender: 'female',
  //     key: '2',
  //   },
  //   {
  //     id: 3,
  //     name: 'wang',
  //     gender: 'male',
  //     key: '3',
  //   },
  // ];
  // return us;
  console.log('request in util!');
  console.log('options in request is ' + options);
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
