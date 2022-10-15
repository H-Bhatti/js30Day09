const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log(`hello i am string`)

// Interpolated
console.log("hello i am %s string", "pakoray")

// Styled
console.log("%c hello i am string", "font-size:50px")

// warning!
console.warn("Ohh Noo")

// Error :|
console.error("ohh nnooo errorr")

// Info
console.info("crorocile have teeth")

// Testing
console.assert(1===2, "this is wrong")
console.assert(1===1, "this is not wrong")

// clearing
//  console.clear();

// Viewing DOM Elements
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(element => {
  console.group(`${element.name}`)
  console.log(`this is ${element.name}`)
  console.log(`this is the age ${element.age}`)
  console.groupEnd(`${element.name}`)
})

// counting
console.count("name")
console.count("name")
console.count("name")
console.count("name")
console.count("name")
console.count("nameed")
console.count("name")
console.count("nameed")

// timing

console.time("feytching data from github")

fetch ('https://api.github.com/user/wesbos')
.then(data=>data.json())
.then(data => {
  console.timeEnd("feytching data from github")
  console.log(data)
})
