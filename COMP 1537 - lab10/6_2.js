
result = unicorns.map(
  (aUnicorn) => {
    if (aUnicorn.name == 'Aurora') {
      aUnicorn.loves = [...aUnicorn.loves, "sugar"]
        }
    return aUnicorn
  }
)
console.log(result)
// 6. Add “sugar” to the list of food unicorn Aurora loves to eat
