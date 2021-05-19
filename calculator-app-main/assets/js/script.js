let string = ""
let operators = ["+", "-", "*", "/"]
function print() {
  let result = document.getElementById("result")
  if (typeof string == String) {
    string = string.replaceAll("*", "x")
  }
  result.innerHTML = string
}
function handleNumberClick(int) {
  if (string == "0") {
    string = ""
  }
  string += int
  print()
}
function handleOperator(operator) {
  let len = string.length
  if (len == 0) return
  if (operators.includes(string[len - 1])) {
    string = string.slice(0, len - 1)
  }
  string += operator
  print()
}
function reset() {
  string = "0"
  print()
}
function handleDelete() {
  let len = string.length
  if (len == 0) return
  string = string.slice(0, len - 1)
  print()
}
function ev() {
  let len = string.length
  if (len == 0) return
  if (operators.includes(string[len - 1])) {
    string = string.slice(0, len - 1)
  }
  string = eval(string)
  print()
  string = ""
}

function changeTheme(e){
let theme;
document.querySelectorAll(".theme").forEach(item=>{
    item.classList.add("hidden")

  })

 if(!e){
  theme= localStorage.getItem("theme")
  document.querySelector(`button[theme=${theme}]`).classList.remove("hidden")
 }else{

   theme = e.getAttribute("theme")
  e.classList.remove("hidden")

 }

 localStorage.setItem("theme", theme)
  const html = document.documentElement
  html.setAttribute('theme', theme);  
}


changeTheme()
  
  