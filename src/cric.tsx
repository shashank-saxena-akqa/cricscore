import * as React from 'react';
import axios from 'axios';

function Cric() {

  const name = "Shashank Saxena"
  var test;
  var testaxios;
  const instance = axios.create({
    baseURL: 'https://cricapi.com/api/matches?apikey=UY8BE0Sq46gdOnLNp97cfVa29pA2',
  });
  testaxios = axios.get('https://cricapi.com/api/matches?apikey=UY8BE0Sq46gdOnLNp97cfVa29pA2')
    .then(function (response) {
    console.log("RES", response.data.matches.length);
    testaxios = response;
      return response;
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  }); 

  var score = getscore();

  console.log("Score :", score);
  
  score.then((result) => {
    console.log("Result :", result);
    test = result;
    console.log("Test :", test)
    return result;
  })

  console.log("testaxios :", testaxios)
  

  return <div>
    <h1>{name}</h1>
  </div>
}

export const getscore = async (): Promise<any> => {
  var val;
  const endpoint = `https://cricapi.com/api/matches?apikey=UY8BE0Sq46gdOnLNp97cfVa29pA2`;
  const data = await (await fetch(endpoint)).json().then((data) => { 
  val = data;
  })
  return val;
}

export default Cric;