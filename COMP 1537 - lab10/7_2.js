
let unicorns = require('./data.js')

unicorns = unicorns.map(
  (aUnicorn) => {
    return {
    ...aUnicorn,
    "vaccinated": aUnicorn.vaccinated = true}
  }
)
console.log(unicorns)
// 7. Give all of the unicorns vaccine(set vaccinated to be true)
