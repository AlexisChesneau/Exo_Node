const msg = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Je suis ${msg.name} de ${msg.campus}`,
    e : "oO",
    T : "U "
}));