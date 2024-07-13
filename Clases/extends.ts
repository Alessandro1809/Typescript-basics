(()=>{

    class Avenger{
        constructor(
            public name:string,
            public age:number
        ){
            console.log('Constructor Avenger'); 

        }
        protected getFullName(){//los etodos protegidos funcionan enla clase o clases que extiendan de esta
            return `${this.name} ${this.age}`;
        }
    }

    class Xmen extends Avenger{
        constructor(
            name:string,//prop de la clase padre
            age:number,//prop de la clase padre
            public isMutant:boolean
        ){
            super(name, age);//si se extiende de una clase se debe llamar al constructor de la clase padre para pasar los atributos de la nueva clase a la clase padre
            console.log('Constructor Xmen'); 
        }

        getFullNameXmen(){
            console.log(super.getFullName());//llama al metodo getFullName de la clase padre al que se puede acceder porque esta declarado como protected
            
        }
        get nameAndAge(){//getters

            //La funcion getter siempre SIEMPRE retorna un valor
            return `${this.name} - ${this.age}` 
        }
        set nameAndAge(name:string){
            //logica de programacion
            this.name = name;
        }//no regresa ningun valor pero si necesita UN SOLO argumento la idea del setter es darle el valor al argumento que requerimos
        
    }
    
    const wolverine = new Xmen('Wolverine', 60, true);

    console.log(wolverine.nameAndAge);//asi se accede a un getter(estos no se ejecutan como las funciones normales)

    wolverine.nameAndAge = 'Antman';//asi se accede a un setter(estos no se ejecutan como las funciones normales) solo se les da el valor que necesitamos

})();