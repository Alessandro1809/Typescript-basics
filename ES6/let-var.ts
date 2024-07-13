(()=>{
    console.log('hola');
    // las variables var no son seguras y hay que tratar de evitar declararlas con var
    const HERO:string= 'batman';

    let VILLAIN:string ='Joker';

    //si se intenta sobreescribir una funcion declarada como constante se arroja un error
    const getName=():string=>{

        return VILLAIN;
    }
    console.log(HERO);

})(); 