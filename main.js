var amountInput = document.getElementById('Amount')
function result() {
  var x = amountInput.value
  var y = document.getElementById('to_currency').value
  var z = document.getElementById('currency').value

  if (z === 'INR' && y === 'INR') {
    document.getElementById('result').innerHTML = x
  }
  if (z === 'INR' && y === 'GBP') {
    var gbp = x * 101.643
    document.getElementById('result').innerHTML = gbp
  }
  if (z === 'INR' && y === 'EUR') {
    var eur = x * 87.92822
    document.getElementById('result').innerHTML = eur
  }
  if (z === 'GBP' && y === 'INR') {
    var gti = x * 101.6665
    document.getElementById('result').innerHTML = gti
  }
  if (z === 'GBP' && y === 'GBP') {
    document.getElementById('result').innerHTML = x
  }
  if (z === 'GBP' && y === 'EUR') {
    var gte = x * 1.155
    document.getElementById('result').innerHTML = gte
  }
  if (z === 'EUR' && y === 'INR') {
    var eti = x * 87.9268
    document.getElementById('result').innerHTML = eti
  }
  if (z === 'EUR' && y === 'GBP') {
    var etg = x * 0.865452
    document.getElementById('result').innerHTML = etg
  }
  if (z === 'EUR' && y === 'EUR') {
    document.getElementById('result').innerHTML = x
  }
}
