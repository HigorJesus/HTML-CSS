function mostrarSenha(){
    var txtsenha=document.getElementById("txtSenha");
    var mostrarSenha =document.getElementById("mostrarS")
    if(txtsenha.type == "passoword"){
        txtsenha.type = "text";
    }else{
        txtSenha.type ="password"
    }
    
}