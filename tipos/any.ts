(()=>{
    //los datos any no tinen el auto ayuda
    let avengers:any = 123;
    let exists;
    let power;

    avengers = 'Dr. Strange';
    console.log(avengers.charAt(0));//devuelve el primer caracter

    //cating de datos:
    console.log((avengers as string).charAt(0));//convierte el any a string
    console.log(<string>avengers.length);//convierte el any a string

    
    avengers=123.312313123;
    console.log(avengers.toFixed(2));//devuelve el numero con 2 decimales
    ;
})();