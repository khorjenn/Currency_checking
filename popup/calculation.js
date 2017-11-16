document.getElementById("currencyCal").onclick = function(){
    var from = document.getElementById('from').value;
    var from_data = from.substring(0,3);
    var to = document.getElementById('to').value;
    var to_data = to.substring(0,3);
    var amount = document.getElementById('amount').value;

    var xHttp = new XMLHttpRequest();
    
    xHttp.onreadystatechange = function(){
        if(xHttp.readyState == 4 && xHttp.status == 200){
            var obj = JSON.parse(this.responseText);
            var fact = obj.rates[to_data];
            var total = parseFloat(amount) * parseFloat(fact);
            
            document.getElementById('result').innerHTML = total;
        }
    }
    xHttp.open('GET', 'https://api.fixer.io/latest?base='+from_data+'&symbols='+to_data, true);
    xHttp.send();
};