var num = document.getElementById('fnumb')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var vetores = []



function adicionar(){
    if(yNumero(num.value) && !inLista(num.value, valores)){
        
    }else{
        window.alert('valor inválodo ou ja encontrado')
    }

    

}
function yNumero(n){
    if(Number(n)>= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1 ){
        return true
        } else{
            return false
        }
}        

    
    
    
 