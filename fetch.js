// ******************************************
// API
// ******************************************

const urlAPI = 'http://dulian.cartodb.com/api/v2/sql/?q=SELECT%20*%20FROM%20mddk_info'


// ******************************************
// XMLHttpRequest
var req = new XMLHttpRequest();
req.open('GET', urlAPI, false);
req.send(null);
if(req.status == 200)
  console.log('response from XHR', req)
  console.log('data from XHR', JSON.parse(req.response))


// ******************************************
//  FETCH
fetch(urlAPI)
  .then((response) => {
    console.log('response from FETCH', response)
    return response.json();
  })
  .then((data) => {
    console.log('data from FETCH',  data);
  });


// ******************************************
//  AXIOS
axios.get(urlAPI)
  .then((response) => {
    console.log('response from AXIOS', response);
    console.log('data from AXIOS', response.data);
  })