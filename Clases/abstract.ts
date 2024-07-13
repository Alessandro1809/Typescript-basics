(()=>{
    abstract class Mutante{
        constructor(
            public name:string,
            public realName:string
        ){}
        
    }
    class Xmen extends Mutante{//de esta manera podemos heredar de una clase abstracta
        salvarPlaneta(){//los etodos de la clase que hereda de la clase abstracta son unicos para objetos de esta clase Vilian
            console.log('salvando el planeta');
        }
    }

    class Vilian extends Mutante{
        conquistarMundo(){//los etodos de la clase que hereda de la clase abstracta son unicos para objetos de esta clase Vilian
            console.log('conquistando el mundo');
        }
    }
    const wolverine:Xmen = new Xmen('Wolverine', 'Logan');
    const magneto:Vilian = new Vilian('Magneto', 'Magnus');// no podemos hacer una nueva instancia una clase abstracta
    
    


    const getName =(charcacter:Mutante)=>{
        console.log(charcacter.name);
        
    }

    getName(wolverine);

    
})()