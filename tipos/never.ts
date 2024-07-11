(()=>{
    //el tipo de dato never devuelve si o si un error esot detiene el codigo
    //Notiene un punto alcanzable es decir no tiene retorno solo finaliza
    const error = (message: string):(never|number) => {//esto funciona porque se le esta indicando que devuelve un never o un numero
        if (false) {
            throw new Error(message);
        }
        return 1;
    }

    error('ayuda');
})();