/*jshint esversion: 6 */
const API_KEY = require('./key.js');




// Request Function
function getGetty(image, id){
  const oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function(){
    var reqData = JSON.parse(this.responseText);
    console.log(reqData);

  });
  oReq.open( 'GET', `https://api.gettyimages.com/v3/search/${image}/${id}`);
  oReq.send();
}

getGetty()
// Helper Functions
