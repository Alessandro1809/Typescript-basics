"use strict";
(() => {
    class Avenger {
        constructor(name, power, age, team) {
            this.name = name;
            this.power = power;
            this.age = age;
            if (team) {
                Avenger.team = team;
            }
        }
    }
    Avenger.team = 'Avengers';
    const antMan = new Avenger('Antman', 9000, 32);
    console.log(antMan);
})();
//# sourceMappingURL=clases.js.map