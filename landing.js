function mascara(){
    var masc = document.getElementById('telefone')
    if(masc.value.length == 2){
        masc.value = '('+masc.value+')'
    }else if(masc.value.length == 9){
        masc.value += '-'
    }

    
} 

function mascara_tel2(){
    var masc2 = document.getElementById('telefone2')
    if(masc2.value.length == 2){
        masc2.value = '('+masc2.value+')'
    }else if(masc2.value.length == 9){
        masc2.value += '-'
    }

}
