(()=>{
    //esto casi no usa
    //esto es un patron singleton, es decir que en este caso cada vez que se llame a la calse se estaria apuntando a la misma instancia
    class Apocalipsis {

        static instance:Apocalipsis;
        private constructor(public name:string){
        }

        static callApocalipsis():Apocalipsis{
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis el único');
            }
            return Apocalipsis.instance;
        }

        changeName(newName:string):void{
            this.name = newName;
        }

    }

    const apocalipsis = Apocalipsis.callApocalipsis();//esta y todas las referencias apuntan a la misma instancia
    apocalipsis.changeName('Soy el nuevo Apocalipsis');
})();