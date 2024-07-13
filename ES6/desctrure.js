"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        name: 'Samuel L. Jackson',
        age: 30,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        activo: true,
    };
    const printAvengers = (_a) => {
        var { age } = _a, rest = __rest(_a, ["age"]);
        console.log(age, rest.activo);
    };
    printAvengers(avengers);
    const { name } = avengers;
    console.log(name);
    const avengersArr = ['Dr. Strange', true, 32];
    const [, posicionDelBoolean, ...rest] = avengersArr;
    console.log({ posicionDelBoolean, rest });
})();
//# sourceMappingURL=desctrure.js.map