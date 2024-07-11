(()=>{
    //Asi se define una Tupple en typescript es para indicar valores de tipo constante
    const hero: [string,number, boolean] = ['Spiderman', 30, true];

    hero[0]='50';//si meto en esta osicion un numero se quejaria porque es un string lo que esta en la posicion 0
    hero[1]=40;
    hero[2]=false;

})();