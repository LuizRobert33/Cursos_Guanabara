function Contar(){
    var inicio = window.document.getElementById('tx1')
    var fim =  window.document.getElementById('tx2')
    var passo =  window.document.getElementById('tx3')
    var res = window.document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
      //Ideia de alerta -----> res.innerHTML = 'Impossivel Contar,Tente Novamente '  

        window.alert(`[ERRO]DADOS INCOMPLETOS`) 
        
    } else{
      res.innerHTML = ' Contando: <br> '
      var i = Number(inicio.value)
      var f = Number(fim.value)
      var p = Number(passo.value)
      if(p <= 0){
        window.alert('Ação Invalida')
        p = 1
      }
      if( i < f){
        //Contagem Crescente
        for(var c = i; c <= f; c+= p){
        res.innerHTML += `${c} \u{1f449} `
      }
      } else{
        //Contagem Decrescente
        for(var c = i; c >= f; c -= p)
          res.innerHTML += ` ${c} \u{1f449}`
      }
      res.innerHTML += `\u{1F3C1}`
      
    }

}