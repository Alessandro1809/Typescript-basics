"use strict";
(() => {
    class Avenger {
        static avrgeAge() {
            return 35;
        }
        constructor(name, power, age, team) {
            this.name = name;
            this.power = power;
            this.age = age;
            this.team = team;
        }
        bio() {
            return `${this.name} ${this.power} ${this.age} ${this.team}`;
        }
    }
    const antMan = new Avenger('Antman', 9000, 32);
    console.log(antMan.bio());
    console.log(Avenger.avrgeAge());
})();
//# sourceMappingURL=clasests.js.map