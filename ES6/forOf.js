"use strict";
(() => {
    const ironman = {
        name: 'Tony',
        age: 45,
        weapons: ['armorsuit', 'laser', 'plasma']
    };
    const captainAmerica = {
        name: 'Steve',
        age: 100,
        weapons: ['shield', 'supperstrength', 'papucho']
    };
    const thor = {
        name: 'Thor',
        age: 1000,
        weapons: ['hammer', 'armormsuit', 'axe']
    };
    const avengers = [ironman, captainAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger.age, avenger.name, avenger.weapons);
    }
})();
//# sourceMappingURL=forOf.js.map