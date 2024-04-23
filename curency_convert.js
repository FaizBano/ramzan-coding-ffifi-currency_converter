#! usr/bin/env node
import inquirer from "inquirer";
const currency = {
    usd: 1,
    eur: 0.99,
    gbp: 0.76,
    inr: 74.57,
    pkr: 280
};
let user_ans = await inquirer.prompt([
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["usd", "eur", "gbp", "inr", "pkr"]
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["usd", "eur", "gbp", "inr", "pkr"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number"
    }
]);
console.log(user_ans);
let fromCurrency = currency[user_ans.from];
console.log(`${user_ans.from} ${fromCurrency}`);
let toCurrency = currency[user_ans.to];
console.log(`${user_ans.to} ${toCurrency}`);
let amount = user_ans.amount;
console.log(`amount =   ${amount}`);
let baseAmount = amount / fromCurrency;
console.log(`your base amount will be in ${user_ans.to} is ${baseAmount}`);
let convertedAmount = toCurrency * amount;
console.log(`your converted amount in ${user_ans.to} is ${baseAmount}`);
