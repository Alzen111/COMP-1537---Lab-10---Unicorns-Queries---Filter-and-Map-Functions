
const unicorns = unicorns.map(
  aUnicorn => {
    if (aUnicorn.name == "Pilot"){
      aUnicorn.vampires -= 2
    }
    return aUnicorn
  }
)
console.log(unicorns)
// 5. Decrease unicorn Pilot’s number of vampires by 2
