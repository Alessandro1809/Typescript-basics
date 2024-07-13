"use strict";
(() => {
    class Avenger {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            console.log('Constructor Avenger');
        }
        getFullName() {
            return `${this.name} ${this.age}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, age, isMutant) {
            super(name, age);
            this.isMutant = isMutant;
            console.log('Constructor Xmen');
        }
        getFullNameXmen() {
            console.log(super.getFullName());
        }
        get nameAndAge() {
            return `${this.name} - ${this.age}`;
        }
        set nameAndAge(name) {
            this.name = name;
        }
    }
    const wolverine = new Xmen('Wolverine', 60, true);
    console.log(wolverine.nameAndAge);
    wolverine.nameAndAge = 'Antman';
})();
//# sourceMappingURL=extends.js.map