(()=>{

    const numbers:(number|string|boolean)[] = [1,2,'3',4,5,6,7,8,9,10];
    numbers.push(11);
    numbers.push(false);
    console.log({numbers});

    const villanos:string[] = ['Lex','Red Skull','Doom'];
    //el foreach interpreta los tios de entrada del arreglo que recorre
    villanos.forEach(villian => console.log(villian.toUpperCase()));

})();