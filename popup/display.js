var from = document.getElementById('from');
var to = document.getElementById('to');
var xHttp = new XMLHttpRequest();

xHttp.onreadystatechange = function(){
    if(xHttp.readyState == 4 && xHttp.status == 200){
        var obj = JSON.parse(this.responseText);
        var options = '';
        var currency_name = '';
        
        
        
        for(key in obj.rates){
            switch(key){
                case 'AUD':
                currency_name = "Australia dollar";
                break;

                case 'BGN':
                currency_name = "Bulgarian lev";
                break;

                case 'BRL':
                currency_name = "Brazilian real";
                break;

                case 'CAD':
                currency_name = "Canadian Dollar";
                break;

                case 'CHF':
                currency_name = "Swiss franc";
                break;

                case 'CNY':
                currency_name = "Renminbi";
                break;

                case 'CZK':
                currency_name = "Czech koruna";
                break;

                case 'DKK':
                currency_name = "Danish krone";
                break;

                case 'GBP':
                currency_name = "Pound sterling";
                break;

                case 'HKD':
                currency_name = "Hong Kong dollar";
                break;

                case 'HRK':
                currency_name = "Croatian kuna";
                break;

                case 'HUF':
                currency_name = "Hungarian forint";
                break;

                case 'IDR':
                currency_name = "Indonesian rupiah";
                break;

                case 'ILS':
                currency_name = "Israeli new shekel";
                break;

                case 'INR':
                currency_name = "Indian rupee";
                break;

                case 'JPY':
                currency_name = "Japanese yen";
                break;

                case 'KRW':
                currency_name = "South Korean won";
                break;

                case 'MXN':
                currency_name = "Mexican peso";
                break;

                case 'MYR':
                currency_name = "Malaysian ringgit";
                break;

                case 'NOK':
                currency_name = "Norwegian krone";
                break;

                case 'NZD':
                currency_name = "New Zealand dollar";
                break;

                case 'PHP':
                currency_name = "Philippine Peso";
                break;

                case 'PLN':
                currency_name = "Polish złoty";
                break;

                case 'RON':
                currency_name = "Romanian leu";
                break;

                case 'RUB':
                currency_name = "Russian ruble";
                break;

                case 'SEK':
                currency_name = "Swedish krona";
                break;

                case 'SGD':
                currency_name = "Singapore dollar";
                break;

                case 'THB':
                currency_name = "Thai baht";
                break;

                case 'TRY':
                currency_name = "Turkish lira";
                break;

                case 'USD':
                currency_name = "United States Dollar";
                break;

                case 'ZAR':
                currency_name = "South African rand";
                break;

                default:
                currency_name = "Not Available";
            }
            options = options + '<option>'+key+' - '+currency_name+'</option>';
        }
        from.innerHTML = options;
        to.innerHTML = options;
    }
}
xHttp.open('GET', 'https://api.fixer.io/latest', true);
xHttp.send();