(()=>{
    
    class Avenger{
        // private name:string;
        // private power:number;
        // public age:number;
        // static team:string = 'Avengers';
        static avrgeAge(){//esto es un metodo estatico para llamarlo debo hacer referencia a la clase
            return 35
        }
        //de esta manera se crea la clase y se instancian de una vez los atributos ademas de su encapsulamiento
        constructor(private name:string,
             public power:number,
             public age:number,
             public team?:string){}

         bio(){//metodo que retorna la informacion de la clase este es publico por defecto pero puede ponerse private o protected antes del etodo para hacerlo privado y encapsularlo
                return `${this.name} ${this.power} ${this.age} ${this.team}`    
        }
    }

    const antMan:Avenger = new Avenger('Antman',9000, 32);

    console.log(antMan.bio());//asi se llama al metodo

    console.log(Avenger.avrgeAge());//asi se llama a un metodo static o estatico 


    
    
})();