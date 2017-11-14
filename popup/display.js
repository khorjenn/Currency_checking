var from = document.getElementById('from');
var to = document.getElementById('to');
var xHttp = new XMLHttpRequest();

xHttp.onreadystatechange = function(){
    if(xHttp.readyState == 4 && xHttp.status == 200){
        var obj = JSON.parse(this.responseText);
        var options = '';
        
        options = options + '<option>'+key+' - '+currency_name+'</option>';

        from.innerHTML = options;
        to.innerHTML = options;
    }
}
xHttp.open('GET', 'https://api.fixer.io/latest', true);
xHttp.send();