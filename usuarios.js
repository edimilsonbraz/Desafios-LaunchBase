// // //Programa armazenas um objeto e cria um loop pra imprimir os dados solicitados

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
   
]
            
        for (let i = 0; i < usuarios.length; i++) {
            console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
        }
      
    //Busca por tecnologia
    function checaSeUsuarioUsaCSS(usuario)  {  
          
        for (let tecnologia of usuario.tecnologias) {
            if (tecnologia == 'CSS') return true
        } 
        
            return false
        
    }

    for (let i = 0; i < usuarios.length; i++) {
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i])

        if (usuarioTrabalhaComCSS) {
            console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
        }
                    
    }

    