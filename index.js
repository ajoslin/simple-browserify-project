var value = require('./value')
var css = require('sheetify')
var classname = css('./style.css')

console.log(classname)

document.body.innerHTML = `<div class=${classname}>${value}</div>`
