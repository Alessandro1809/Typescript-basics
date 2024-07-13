(()=>{

    interface addTwoNumbers{
        (a:number,b:number):number
    }

    let add:addTwoNumbers;
    add = (a:number,b:number):number => {
        return a + b
    }

    console.log(add(1,2))

})()