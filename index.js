const userInfo = require('./information');



var cowsay = require("cowsay");

console.log(cowsay.say({
    text: (`Bonjour, je suis ${userInfo.name} et je suis au campus de ${userInfo.campus} depuis 1 mois`)
}));

