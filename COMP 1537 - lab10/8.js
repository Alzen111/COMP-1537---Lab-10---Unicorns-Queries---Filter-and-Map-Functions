
unicorns = unicorns.sort(
  (a, b) => {
    if (a.weight > b.weight)
      return -1
    else
      return +1
  }
)
console.log(unicorns)
// 8. Sort the unicorns based on weights decreasingly
