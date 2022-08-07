function tabuada(){
    var numero = window.document.getElementById('tx1')
    var tab = window.document.getElementById('tx2')
    if(numero.value.length == 0){
       window.alert('Por favor,digite um nuemero')
    } else {
         var n = Number(numero.value)
         var c = 1 
         tab.innerHTML = ''
         while (c <= 10) {
            var item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
         }
    }

}