"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarPlaneta() {
            console.log('salvando el planeta');
        }
    }
    class Vilian extends Mutante {
        conquistarMundo() {
            console.log('conquistando el mundo');
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Vilian('Magneto', 'Magnus');
    const getName = (charcacter) => {
        console.log(charcacter.name);
    };
    getName(wolverine);
})();
//# sourceMappingURL=abstract.js.map