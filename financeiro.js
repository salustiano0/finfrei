import prompt from 'prompt-sync';
let ler = prompt()

export function exibirMensagem(mensagem){
  console.log(mensagem)
}

export function Depositar(saldo) {


console.log('Digite o valor a ser depositado:')
 let numero=ler()


 if (numero == "c") {
  console.log('Operação cancelada!');
  return  saldo
 
}

if (numero <= 0) {
  console.log('Valor inválido! Tente novamente.');
  return saldo
} 

return saldo + Number(numero)
}







export function sacar(saldo) {
  console.log('Digite o valor que você deseja sacar:')
  let numero=ler()
 
  if (numero == "c") {
    console.log('Operação cancelada!');
    return  saldo 

  }

  if(numero <= 0) {
    console.log('Valor inválido! Tente novamente.');

  }
 return saldo - Number(numero)



}






export function exibirSaldo(saldo) {

  return (saldo.toFixed(2))
}



export function Investimento(M) {


  console.log('Digite o valor de aplicação:')
   let C =Number(ler())

   console.log('Digite a taxa de juros:')
   let i =Number(ler())

   console.log('Digite o tempo da aplicação')
   let t =Number(ler())


    M = (C *( 1+(i/100))**t).toFixed(2)
    console.log(M)
    return M


}