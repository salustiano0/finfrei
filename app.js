
 
import prompt from 'prompt-sync';
let ler = prompt ()
import { Depositar, sacar , exibirSaldo , Investimento, exibirMensagem } from './financeiro.js';
import { boasvindas } from './menu.js';

const titulo = 
    

`███████╗██████╗ ███████╗██╗    ███████╗██╗███╗   ██╗
██╔════╝██╔══██╗██╔════╝██║    ██╔════╝██║████╗  ██║
█████╗  ██████╔╝█████╗  ██║    █████╗  ██║██╔██╗ ██║
██╔══╝  ██╔══██╗██╔══╝  ██║    ██╔══╝  ██║██║╚██╗██║
██║     ██║  ██║███████╗██║    ██║     ██║██║ ╚████║
╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝    ╚═╝     ╚═╝╚═╝  ╚═══╝`
                                                    

  

const ciano = '\x1b[36m%s\x1b[0m'

console.clear()

let continuar = true
let saldo = 0
let M  = 0

exibirMensagem(titulo)

saldo = boasvindas('Digite o seu nome para iniciarmos')
exibirMensagem(saldo)
saldo = Number(ler())

console.clear()


while(continuar){
    
    console.log(
  
        `Insira um número para continuar:
     
          1  - Depositar
          2  - Sacar
          3  - Ver saldo
          4  - Simulador de investimento
          0  - Sair
         `
     
       
          )
     
       let opcaoescolhida = Number(ler())
     
        if(opcaoescolhida == 0 ){
         continuar= false
     
        } else if (opcaoescolhida == 1){
     
          saldo = Depositar(saldo)
     
        }else if (opcaoescolhida == 2){
     
           saldo = sacar(saldo)
     
        }else if (opcaoescolhida == 3){
     
         let x =exibirSaldo(saldo)
         console.log(x)
     
     
     
        }  else if (opcaoescolhida == 4){
     
         M=  Investimento(M)
     
     
     }
     
}
 


