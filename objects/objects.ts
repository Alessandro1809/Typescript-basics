(()=>{

    let flash:{ name: string, age: number, powers: string[], getName?: () => string  } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
         getName(){
             return this.name;
         }   
    }

    let SuperMan:{ name: string, age: number, powers: string[], getName?: () => string  } = {
        name: 'Clarck Kent',
        age: 24,
        powers: ['Super velocidad'],
         getName(){
             return this.name;
         }   
    }

    flash ={
        name:'superman',
        age: 60,
        powers: ['Super velocidad', 'super fuerza']
    }
    
    console.log(flash);
    

})();