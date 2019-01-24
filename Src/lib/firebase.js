const url_login = '';
const url_create = '192.168.137.1:8000/create';

let firebase = {};


 firebase.createUser = (name,email,password) =>{

   return fetch(url_create, {
          method: 'POST',
          body: JSON.stringify({
            name:name,
            email:email,
            password:password
          }),
        }).then((response) => response.json()).then((responseJson) => {
            alert(responseJson);
          return responseJson;
        });

}

firebase.userLogin = (email,password) =>{
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password
    }),
  });
}

module.exports = firebase;  
