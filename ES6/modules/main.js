import {name, getName, setName} from "./tom";

console.log(getName()); // Tom
setName('timi');
console.log(getName()); // Timi
name = 'Linda';
console.log(getName()); // Timi