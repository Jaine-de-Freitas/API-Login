function Limpar(){
    document.getElementById('cep').value="Cep não encontrado!"
    document.getElementById('cidade').value=("")
    document.getElementById('bairro').value=("")
    document.getElementById('estado').value=("")
    document.getElementById('telefone').value=("")
    document.getElementById('rua').value=("")
}
function Cep(){
    var cep=document.getElementById('cep').value
    var url=`https://viacep.com.br/ws/${cep}/json/`
    fetch(url).then(response =>{
        response.json().then(dados =>{
            var endereco=dados.uf
            if(endereco===undefined){
                Limpar()
            }else{
                document.getElementById('cep').value=dados.cep
                document.getElementById('cidade').value=dados.localidade
                document.getElementById('bairro').value=dados.bairro
                document.getElementById('estado').value=dados.uf
                document.getElementById('telefone').value=`(${dados.ddd})`
                document.getElementById('rua').value=dados.logradouro
            }
        })
    })
}

