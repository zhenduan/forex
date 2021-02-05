// const fromForex;
// const toForex;
var fromValue;
var toValue;
var fromForex;
var toForex;
// fromValue = document.getElementById('fromValue');
// toValue = document.getElementById('fromValue');

const forex = async () => {
    const response = await fetch('https://api.1forge.com/quotes?pairs=AUD/CNY,AUD/USD,AUD/HKD,AUD/NZD,AUD/JPY,AUD/GBP,AUD/EUR,AUD/CAD,AUD/SGD,USD/CNY&api_key=zBF6K0nRBEioAiN8l1RpxFzX3TmBkOeD');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)

    // 0
    document.getElementById('aud-cny-ask').innerHTML = myJson[0].a;
    document.getElementById('aud-cny-bid').innerHTML = myJson[0].b;

    // 1
    document.getElementById('aud-usd-ask').innerHTML = myJson[1].a;
    document.getElementById('aud-usd-bid').innerHTML = myJson[1].b;

    // 2
    document.getElementById('aud-hkd-ask').innerHTML = myJson[2].a;
    document.getElementById('aud-hkd-bid').innerHTML = myJson[2].b;

    // 3
    document.getElementById('aud-nzd-ask').innerHTML = myJson[3].a;
    document.getElementById('aud-nzd-bid').innerHTML = myJson[3].b;

    // 4
    document.getElementById('aud-jpy-ask').innerHTML = myJson[4].a;
    document.getElementById('aud-jpy-bid').innerHTML = myJson[4].b;

    // 5
    document.getElementById('aud-gbp-ask').innerHTML = myJson[5].a;
    document.getElementById('aud-gbp-bid').innerHTML = myJson[5].b;

    // 6
    document.getElementById('aud-eur-ask').innerHTML = myJson[6].a;
    document.getElementById('aud-eur-bid').innerHTML = myJson[6].b;

    // 7
    document.getElementById('aud-cad-ask').innerHTML = myJson[7].a;
    document.getElementById('aud-cad-bid').innerHTML = myJson[7].b;

    // 8
    document.getElementById('aud-sgd-ask').innerHTML = myJson[8].a;
    document.getElementById('aud-sgd-bid').innerHTML = myJson[8].b;

    // 9
    document.getElementById('usd-cny-ask').innerHTML = myJson[9].a;
    document.getElementById('usd-cny-bid').innerHTML = myJson[9].b;
  }


  forex();

  const exchangeFrom = async () => {
    fromForex = document.getElementById("fromForex").value;
    toForex = document.getElementById("toForex").value;
    const response = await fetch(`https://api.1forge.com/convert?from=${fromForex}&to=${toForex}&quantity=${fromValue}&api_key=zBF6K0nRBEioAiN8l1RpxFzX3TmBkOeD`);
    const myJson = await response.json(); //extract JSON from the http response
    document.getElementById("toValue").value = myJson.value;
    console.log(myJson)
    console.log("fromForex " + fromForex);
    console.log("toForex " + toForex);
    console.log("from value " + fromValue);

  }

  const exchangeTo = async () => {
    fromForex = document.getElementById("fromForex").value;
    toForex = document.getElementById("toForex").value;
    const response = await fetch(`https://api.1forge.com/convert?from=${toForex}&to=${fromForex}&quantity=${toValue}&api_key=zBF6K0nRBEioAiN8l1RpxFzX3TmBkOeD`);
    const myJson = await response.json(); //extract JSON from the http response
    document.getElementById("fromValue").value = myJson.value;
    console.log(myJson)
    console.log("fromForex " + fromForex);
    console.log("toForex " + toForex);
    console.log("from value " + fromValue);

  }

  function getFromValue() {
     fromValue = parseInt(document.getElementById('fromValue').value);
    //   console.log("From:" + fromValue)
    exchangeFrom();

  }
  function getToValue() {
      toValue = document.getElementById('toValue').value;
      exchangeTo();
    //   console.log("To" + toValue)
  }

  function getFromForex(){
    fromForex = document.getElementById("fromForex").value;
    exchangeFrom();
    // console.log("from forex " + fromForex)
  }
  function getToForex(){
    toForex = document.getElementById("toForex").value;
    exchangeTo();
    // console.log("to forex " + toForex)
  }
//   exchange();
// window.setInterval(function() {
//     // do stuff
//     forex();
//   }, 5000); // 1000 milliseconds (1 second)

// https://api.1forge.com/convert?from=USD&to=EUR&quantity=100&api_key=zBF6K0nRBEioAiN8l1RpxFzX3TmBkOe