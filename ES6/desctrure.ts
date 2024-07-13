(()=>{

    //interface y type son validos y buenas practicas
    type Hero = {//esto podria ser simplemente un objeto pero es mucho mejor antener la integridad de los datos
        name: string;
        age?: number;
        powers: string[];
        activo: boolean;
    }
    interface Heroe {
        name: string;
        age?: number;
        powers: string[];
        activo: boolean;
    }

    const avengers:Hero = {
        name: 'Samuel L. Jackson',
        age: 30,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        activo: true,
    }

    const printAvengers = ({age,...rest}:Hero) => {// ejemplo de rest of Props
        console.log(age,rest.activo);
    }

    printAvengers(avengers);
    const {name} = avengers;
    console.log(name);   


    const avengersArr:[string, boolean, number]=['Dr. Strange', true, 32];//el restOfProps tambien funciona en el desestructurado de arreglos
    const [ ,posicionDelBoolean, ...rest] = avengersArr;//si se pone una coma antes de desestructurar excluye el primer elemento del arreglo
    console.log({posicionDelBoolean,rest});

})();