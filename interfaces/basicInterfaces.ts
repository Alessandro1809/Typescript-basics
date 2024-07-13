(()=>{

    type Detalles = {//--> no se puede expandir si se declara no se le pueden agregar mas propiedades despues
        autor: string;
        anio: number;
    }
    interface Reproductor {//--> funciona casi igual que un type, pero se puede expandir
        volumen: number;
        segundo: number;
        cancion: string;
        detalles: Detalles
    }
    //--> usar la interfaz y el type son iguales
    const reproductor: Reproductor = {
        volumen: 90,
        segundo: 36,
        cancion: 'Mess',
        detalles: {
            autor: 'Ed Sheeran',
            anio: 2015
        }
    }
    console.log(reproductor);
    



})();