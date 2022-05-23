function mostrarSenha(){
    var txtsenha=document.getElementById("txtSenha");
    if(txtsenha.type == "passoword"){
        txtsenha.type = "text";
    }else{
        txtSenha.type ="password"
    }
    
}