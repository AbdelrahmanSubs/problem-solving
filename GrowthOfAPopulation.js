// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?
// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10


function nbYear(p0, percent, aug, p) {
  let result = p0
  let years = 0

  for(let i = 0; result < p; i++) {
    
    result += Math.floor(((result*(percent/100))+aug))
    years += 1
    
  }

    return (years)
}

// What I Used:
// - Calculating the population growth percentage each year
// - Adding the fixed number of inhabitants (aug)
// - Using Math.floor() to keep the population as an integer
// - Running a loop while the population is smaller than p
// - Counting how many years are needed to reach the target population