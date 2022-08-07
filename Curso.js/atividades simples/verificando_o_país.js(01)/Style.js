function calcular(){
  var país = window.document.getElementById('país').value
  var res = window.document.getElementById('res')
  if(país == 'brasil'||país == 'Brasil'){
    res.innerHTML = `Você é Brasileiro`
  } else {
    res.innerHTML = `Você é Estrangeiro`
  }
  
  

  
}