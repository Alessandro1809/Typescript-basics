(()=>{

    interface Xmen {
        nombre: string;
        poder: string;
        mutant(id:number):string;
    }
    interface Human {
        age: number;
    }
    class XmenClase implements Xmen, Human {
        public nombre: string;
        public poder: string;
        public age: number; 
        mutant(id: number): string {
            return `mutante ${this.nombre} tiene uuna edad de ${this.age}`;
        }
    }

    const wolverine = new XmenClase();
    wolverine.nombre = 'Logan';
    wolverine.poder = 'Regeneracion';
    wolverine.age = 500;
    console.log(wolverine.mutant(1));
    
})()