function addlanguage(langName){
    const li = document.createElement('li')
    li.innerHTML = `${langName}`
    document.querySelector('.language').
    appendChild(li)
}
addlanguage("Python")
addlanguage("Java")

// Best Approach
function addOptiLanguage(langName){
    const li = document.createElement('li')
    addText = document.createTextNode(langName)
    li.appendChild(addText)
    document.querySelector('.language').appendChild(li)
}
addOptiLanguage("C++")
addOptiLanguage("Ruby")

// 1st Approach
//  Edit Or Remove
const secondLang = document.querySelector('li:nth-child(2)')
// secondLang.innerHTML = "Mojo"

// 2nd Approach
const newli = document.createElement('li')
newli.textContent = "Mojo"
secondLang.replaceWith(newli)

// 3rd Approach:- 
const firstLang = document.querySelector('li:first-child')
firstLang.outerHTML = "<li>TypeScript</li>"

// Remove 
const lastLang = document.querySelector('li:last-child')
lastLang.remove()