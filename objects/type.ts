(()=>{
    //type Hero = {} es la sintaxis correcta para declarar un tipo nuevo
    type Hero = {
        name: string,
        age: number,
        powers: number[],
        getName?: () => string
    }

    let flash:Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1,2],
         getName(){
             return this.name;
         }   
    }

    let SuperMan:Hero = {
        name: 'Clarck Kent',
        age: 24,
        powers: [1],
         getName(){
             return this.name;
         }   
    }

    console.log(flash, SuperMan);
    
})();