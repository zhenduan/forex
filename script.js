// const fromForex;
// const toForex;
var fromValue;
var toValue;
var fromForex;
var toForex;
var myJson;

var aud_cny_ask;
var aud_cny_bid;

var aud_usd_ask;
var aud_usd_bid;

var aud_hkd_ask;
var aud_hkd_bid;

var aud_nzd_ask;
var aud_nzd_bid;

var aud_jpy_ask;
var aud_jpy_bid;

var aud_gbp_ask;
var aud_gbp_bid;

var aud_eur_ask;
var aud_eur_bid;

var aud_cad_ask;
var aud_cad_bid;

var aud_sgd_ask;
var aud_sgd_bid;

var usd_cny_ask;
var usd_cny_bid;

// fromValue = document.getElementById('fromValue');
// toValue = document.getElementById('fromValue');

const forex = async () => {
    const response = await fetch('https://api.1forge.com/quotes?pairs=AUD/CNY,AUD/USD,AUD/HKD,AUD/NZD,AUD/JPY,AUD/GBP,AUD/EUR,AUD/CAD,AUD/SGD,USD/CNY&api_key=5rw0IcVFAYBzTrE7waDPD3VnpBdiP9bS');
     myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)

    // 0
    document.getElementById('aud-cny-ask').innerHTML = myJson[0].a;
    comparePrice(myJson[0].a, aud_cny_ask, "aud-cny-ask-arrow")
    //document.getElementById("aud-cny-ask-arrow").classList.add(priceArrow);
   
    document.getElementById('aud-cny-bid').innerHTML = myJson[0].b;
    comparePrice(myJson[0].b, aud_cny_bid, "aud-cny-bid-arrow");
    //document.getElementById("aud-cny-bid-arrow").classList.add(priceArrow);

    // 1
    document.getElementById('aud-usd-ask').innerHTML = myJson[1].a;
    comparePrice(myJson[1].a, aud_usd_ask, "aud-usd-ask-arrow")
    //document.getElementById("aud-usd-ask-arrow").classList.add(priceArrow);

    document.getElementById('aud-usd-bid').innerHTML = myJson[1].b;
    comparePrice(myJson[1].b, aud_usd_bid, "aud-usd-bid-arrow")
    //document.getElementById("aud-usd-bid-arrow").classList.add(priceArrow);

    // 2
    document.getElementById('aud-hkd-ask').innerHTML = myJson[2].a;
    comparePrice(myJson[2].a, aud_hkd_ask, "aud-hkd-ask-arrow")
    //document.getElementById("aud-hkd-ask-arrow").classList.add(priceArrow);
 

    document.getElementById('aud-hkd-bid').innerHTML = myJson[2].b;
    comparePrice(myJson[2].b, aud_hkd_bid, "aud-hkd-bid-arrow")
    //document.getElementById("aud-hkd-bid-arrow").classList.add(priceArrow);

    // 3
    document.getElementById('aud-nzd-ask').innerHTML = myJson[3].a;
    comparePrice(myJson[3].a, aud_nzd_ask, "aud-nzd-ask-arrow")
    //document.getElementById("aud-nzd-ask-arrow").classList.add(priceArrow);

    document.getElementById('aud-nzd-bid').innerHTML = myJson[3].b;
    comparePrice(myJson[3].b, aud_nzd_bid, "aud-nzd-bid-arrow")
    //document.getElementById("aud-nzd-bid-arrow").classList.add(priceArrow);

    // 4
    document.getElementById('aud-jpy-ask').innerHTML = myJson[4].a;
    comparePrice(myJson[4].a, aud_jpy_ask, "aud-jpy-ask-arrow")
   // document.getElementById("aud-jpy-ask-arrow").classList.add(priceArrow);

    document.getElementById('aud-jpy-bid').innerHTML = myJson[4].b;
    comparePrice(myJson[4].b, aud_jpy_bid, "aud-jpy-bid-arrow")
    //document.getElementById("aud-jpy-bid-arrow").classList.add(priceArrow);

    // 5
    document.getElementById('aud-gbp-ask').innerHTML = myJson[5].a;
    comparePrice(myJson[5].a, aud_jpy_ask, "aud-gbp-ask-arrow")
    //document.getElementById("aud-gbp-ask-arrow").classList.add(priceArrow);

    document.getElementById('aud-gbp-bid').innerHTML = myJson[5].b;
    comparePrice(myJson[5].b, aud_gbp_bid, "aud-gbp-bid-arrow")
    //document.getElementById("aud-gbp-bid-arrow").classList.add(priceArrow);

    // 6
    document.getElementById('aud-eur-ask').innerHTML = myJson[6].a;
    comparePrice(myJson[6].a, aud_eur_ask, "aud-eur-ask-arrow")
    //document.getElementById("aud-eur-ask-arrow").classList.add(priceArrow);

    document.getElementById('aud-eur-bid').innerHTML = myJson[6].b;
    comparePrice(myJson[6].b, aud_eur_bid, "aud-eur-bid-arrow")
    //document.getElementById("aud-eur-bid-arrow").classList.add(priceArrow);

    // 7
    document.getElementById('aud-cad-ask').innerHTML = myJson[7].a;
    comparePrice(myJson[7].a, aud_cad_ask, "aud-cad-ask-arrow")
    //document.getElementById("aud-cad-ask-arrow").classList.add(priceArrow);
    
    document.getElementById('aud-cad-bid').innerHTML = myJson[7].b;
    comparePrice(myJson[7].b, aud_cad_bid, "aud-cad-bid-arrow")
    //document.getElementById("aud-cad-bid-arrow").classList.add(priceArrow);

    // 8
    document.getElementById('aud-sgd-ask').innerHTML = myJson[8].a;
    comparePrice(myJson[8].a, aud_sgd_ask, "aud-sgd-ask-arrow")
    //document.getElementById("aud-sgd-ask-arrow").classList.add(priceArrow);

    document.getElementById('aud-sgd-bid').innerHTML = myJson[8].b;
    comparePrice(myJson[8].b, aud_sgd_bid, "aud-sgd-bid-arrow")
    //document.getElementById("aud-sgd-bid-arrow").classList.add(priceArrow);

    // 9
    document.getElementById('usd-cny-ask').innerHTML = myJson[9].a;
    comparePrice(myJson[9].a, usd_cny_ask, "usd-cny-ask-arrow")
    //document.getElementById("usd-cny-ask-arrow").classList.add(priceArrow);

    document.getElementById('usd-cny-bid').innerHTML = myJson[9].b;
    comparePrice(myJson[9].b, usd_cny_bid, "usd-cny-bid-arrow")
    //document.getElementById("usd-cny-bid-arrow").classList.add(priceArrow);
  }


  forex();


  // exchange from bottom to up
  const exchangeFromBottomToUp = async () => {
    fromForex = document.getElementById("toForex").value;
    toForex = document.getElementById("fromForex").value;
    const response = await fetch(`https://api.1forge.com/convert?from=${fromForex}&to=${toForex}&quantity=${toValue}&api_key=RnZFGnHhhg2EBdt3YPKH414FYULANNCd`);
    const myJson = await response.json(); //extract JSON from the http response
    document.getElementById("fromValue").value = myJson.value;
    console.log(myJson)


  }

  // exchange from top to bottom
  const exchangeFromUpToBottom = async () => {
    fromForex = document.getElementById("fromForex").value;
    toForex = document.getElementById("toForex").value;
    const response = await fetch(`https://api.1forge.com/convert?from=${fromForex}&to=${toForex}&quantity=${fromValue}&api_key=RnZFGnHhhg2EBdt3YPKH414FYULANNCd`);
    const myJson = await response.json(); //extract JSON from the http response
    document.getElementById("toValue").value = myJson.value;
    console.log(myJson)


  }

  function getFromValue() {
     fromValue = parseInt(document.getElementById('fromValue').value);
       console.log("From value:" + fromValue)

    exchangeFromUpToBottom();

  }
  function getToValue() {
      toValue = document.getElementById('toValue').value;

      exchangeFromBottomToUp();
       console.log("To value" + toValue)
  }

  function getFromForex(){
    fromForex = document.getElementById("fromForex").value;
    // exchangeTo();
    exchangeFromUpToBottom();
    console.log("from forex " + fromForex)

  }
  function getToForex(){
    toForex = document.getElementById("toForex").value;
    // exchangeFrom();
    exchangeFromBottomToUp();
     console.log("to forex " + toForex)
  }

  // compare function
  function comparePrice(currentPrice, previousPrice, priceArrowId){
    var priceArrow;
    if(currentPrice> previousPrice){
     
      priceArrow = "fa-chevron-up";
      document.getElementById(priceArrowId).className = '';
      document.getElementById(priceArrowId).classList.add('fas');
      document.getElementById(priceArrowId).classList.add(priceArrow);
      priceArrow = '';
    } else if(currentPrice < previousPrice){
    
      priceArrow ="fa-chevron-down"
      document.getElementById(priceArrowId).className = '';
      document.getElementById(priceArrowId).classList.add('fas');
      document.getElementById(priceArrowId).classList.add(priceArrow);
      priceArrow = '';
    } else{
      console.log('no change');
    }
  }
//   exchange();
window.setInterval(function() {
    // do stuff
      // forex();
       aud_cny_ask = Number(document.getElementById('aud-cny-ask').innerHTML);
       aud_cny_bid = Number(document.getElementById('aud-cny-bid').innerHTML);

       aud_usd_ask = Number(document.getElementById('aud-usd-ask').innerHTML);
       aud_usd_bid = Number(document.getElementById('aud-usd-bid').innerHTML);

       aud_hkd_ask = Number(document.getElementById('aud-hkd-ask').innerHTML);
       aud_hkd_bid = Number(document.getElementById('aud-hkd-bid').innerHTML);

       aud_nzd_ask = Number(document.getElementById('aud-nzd-ask').innerHTML);
       aud_nzd_bid = Number(document.getElementById('aud-nzd-bid').innerHTML);

       aud_jpy_ask = Number(document.getElementById('aud-jpy-ask').innerHTML);
       aud_jpy_bid = Number(document.getElementById('aud-jpy-bid').innerHTML);

       aud_gbp_ask = Number(document.getElementById('aud-gbp-ask').innerHTML);
       aud_gbp_bid = Number(document.getElementById('aud-gbp-bid').innerHTML);

       aud_eur_ask = Number(document.getElementById('aud-eur-ask').innerHTML);
       aud_eur_bid = Number(document.getElementById('aud-eur-bid').innerHTML);

       aud_cad_ask = Number(document.getElementById('aud-cad-ask').innerHTML);
       aud_cad_bid = Number(document.getElementById('aud-cad-bid').innerHTML);

       aud_sgd_ask = Number(document.getElementById('aud-sgd-ask').innerHTML);
       aud_sgd_bid = Number(document.getElementById('aud-sgd-bid').innerHTML);

       usd_cny_ask = Number(document.getElementById('usd-cny-ask').innerHTML);
       usd_cny_bid = Number(document.getElementById('usd-cny-bid').innerHTML);

 
  }, 5000); // 1000 milliseconds (1 second)



