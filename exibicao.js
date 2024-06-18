import prompt from 'prompt-sync'
let ler = prompt()

export function boasvindas(mensagem){
    console.log(mensagem)
    let n = ler()
    console.clear()
    const titulo = 
    
`
███████╗██████╗ ███████╗██╗    ███████╗██╗███╗   ██╗
██╔════╝██╔══██╗██╔════╝██║    ██╔════╝██║████╗  ██║
█████╗  ██████╔╝█████╗  ██║    █████╗  ██║██╔██╗ ██║
██╔══╝  ██╔══██╗██╔══╝  ██║    ██╔══╝  ██║██║╚██╗██║
██║     ██║  ██║███████╗██║    ██║     ██║██║ ╚████║
╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝    ╚═╝     ╚═╝╚═╝  ╚═══╝
                                                    
`
                                                    
  
    console.log(titulo)
    console.log ('Boas-vindas ao Fin Frei ${n}, insira o valor do seu saldo:')
}