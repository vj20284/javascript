import { accessSync } from "fs";

var accountStr = '{"name":Jedi", "members":["Yoda", "Obi Wan"], "number":34512}';
var accountObj = JSON.parse(accountStr);

console.log(accountObj.name);

var accountObj = {
    name: "Baggins",
    number: 10645,
    members: ["Frodo", "Bilbo"]
};

var accountStr = JSON.stringify(accountObj);
console.log(accountStr);