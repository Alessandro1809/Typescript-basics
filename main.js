"use strict";
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
    let SuperMan = {
        name: 'Clarck Kent',
        age: 24,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        }
    };
    flash = {
        name: 'superman',
        age: 60,
        powers: ['Super velocidad', 'super fuerza']
    };
    console.log(flash);
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
        getName() {
            return this.name;
        }
    };
    let SuperMan = {
        name: 'Clarck Kent',
        age: 24,
        powers: [1],
        getName() {
            return this.name;
        }
    };
    console.log(flash, SuperMan);
})();
(() => {
    let myVariable = 'Alessandro';
    console.log(myVariable);
    myVariable = 20;
    console.log(myVariable);
    myVariable = {
        name: 'Alessandro',
        age: 20,
        powers: [1, 2, 3]
    };
    console.log({ myVariable });
})();
(() => {
    let avengers = 123;
    let exists;
    let power;
    avengers = 'Dr. Strange';
    console.log(avengers.charAt(0));
    console.log(avengers.charAt(0));
    console.log(avengers.length);
    avengers = 123.312313123;
    console.log(avengers.toFixed(2));
    ;
})();
(() => {
    const numbers = [1, 2, '3', 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    numbers.push(false);
    console.log({ numbers });
    const villanos = ['Lex', 'Red Skull', 'Doom'];
    villanos.forEach(villian => console.log(villian.toUpperCase()));
})();
(() => {
    let isSuperMan = true;
    let isBatman = false;
    isSuperMan = (isBatman) ? true : false;
    console.log({ isSuperMan });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log({ currentAudio });
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('ayuda');
})();
(() => {
    let nada = undefined;
    let nulo = null;
    let isActive = undefined;
    console.log(isActive = false);
})();
(() => {
    let avengers = 10;
    const villanos = 20;
    if (avengers < villanos) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const Batman = 'Batman';
    const Superman = 'Superman';
    const Flash = 'Flash';
    const Arrow = `Arrow`;
    let justiceLeague;
    console.log(Batman.toUpperCase());
    console.log(`I'm ${Batman}`);
    console.log(Batman[10].toUpperCase());
    console.log(((_a = Batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'se murio');
})();
(() => {
    const hero = ['Spiderman', 30, true];
    hero[0] = '50';
    hero[1] = 40;
    hero[2] = false;
})();
(() => {
    function callBatman() {
        return;
    }
    const a = callBatman();
    console.log({ a });
    const callSuperMan = () => {
        return;
    };
})();
//# sourceMappingURL=main.js.map