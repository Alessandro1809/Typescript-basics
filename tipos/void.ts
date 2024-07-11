(()=>{
    //El tipo de retorno en funciones va despues de los parentesis
    function callBatman():void{

        return;
    }
    const a = callBatman();
    console.log({a});
    const callSuperMan = ():void=>{
        return;// null no es lo mismo que undefined
    }
})();