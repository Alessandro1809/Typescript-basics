namespace Validations {
    export function validateEmail(email:string): boolean {//==> las funciones exportadas se llaman con el nombre del namespace y es necesario que sea exportadas para que fuera del namespace podamos acceder a ellas
        return (email.includes('@'))? true : false;
    }

    export function validatePassword(password:string): boolean {
        return (password.length >= 6)? true : false;
    }
}

console.log(Validations.validateEmail('a@a.com'));
console.log(Validations.validatePassword('123456'));
