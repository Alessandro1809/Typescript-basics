(()=>{

    interface Client {
        name: string;
        age?: number;
        address?: Address//-->si esto es opcional no se va a quejar si no hay un valor pero si se llega a pasar un valor va a validar que esten todos los atributos del tipo Address
        getFullAddress(id: number): string//--> Esto es un metodocomo propiedad y en las interfaces solo espera un metodo que devuelva un string
    }

    interface Address {
            id: number;
            street: string;
            city: string;
    }
    const client:Client = {
        name: 'Diego',
        age: 32,
        address: {
            id: 1,
            street: 'Calle falsa',
            city: 'Ciudad falsa'
        },
        getFullAddress(id: number) {//==> esta es la forma de pasarle una funcion a una porpiedad como la declarada en la sección anterior --> toma como parametro el id de tipo number 
            return this.address.city;//==> como se espera retorna un string
        }
    }
    
    const client2:Client = {
        name: 'Alessandro',
        address: {
            id: 1,
            street: 'Calle falsa',
            city: 'Ciudad falsa'
        },
        getFullAddress(id: number) {
            return this.address.city;
        }
    }
    console.log(client.address);
    
})()