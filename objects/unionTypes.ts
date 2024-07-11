(()=>{
    type Hero = {
        name: string,
        age: number,
        powers: number[],
        getName?: () => string
    }

    let myVariable: (string | number | Hero) = 'Alessandro';  
    console.log(myVariable);

    myVariable = 20;
    console.log(myVariable);

    myVariable = {
        name: 'Alessandro',
        age: 20,
        powers: [1,2,3]
    }
    console.log({myVariable});
    
})()