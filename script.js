const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]
// 1. new array with names of the superheroes
const names = superheroes.map((hero) => {
    return hero.name
})
console.log("The namse of the superheroes are: " + names + ".");

// 2. new array with light weight superheroes
const weights = superheroes.filter((weight1) => {
    return weight1.weight < 190
})
console.log("The light sperheroes are: ", weights);

// 3. new array exact weight of 200
const heroes200 = superheroes
    .filter((superheroes) => superheroes.weight == 200)
    .map((hero200) => hero200.name);
console.log("Superheroes with weight of 200 are: " + heroes200 + ".");

// 4. firs apperiances
const firstApperiance = superheroes.map(hero => {
    return hero.first_appearance
})
console.log(" First film of heroes are: " + firstApperiance + ".");

//5a. DC comics
const publishDc = superheroes
    .filter((superheroes) => superheroes.publisher === "DC Comics")
    .map((publishedDC) => publishedDC.name);
console.log("The superheroes of DC comics: " + publishDc + ".");

// 5b. Marvel comics
const publishMarvel = superheroes
    .filter((superheroes) => superheroes.publisher === "Marvel Comics")
    .map((publishedMC) => publishedMC.name);
console.log("The superheroes of Marvel comics: " + publishMarvel + ".");

//6. Total weight heroes DC Comics
const totalWeightsDC = superheroes
    .filter((superheroes) => superheroes.publisher === "DC Comics")
    .map((weightsDC) => parseInt(weightsDC.weight)).filter(Boolean)
    .reduce((value, currentValue) => value + currentValue);
console.log("The superheroes total weight of DC comics: " + totalWeightsDC + ".");

//
//7. Total weight heroes Marvel Comics
const totalWeightsMC = superheroes
    .filter((superheroes) => superheroes.publisher === "Marvel Comics")
    .map((weightsMC) => parseInt(weightsMC.weight)).filter(Boolean)
    .reduce((value, currentValue) => value + currentValue);
console.log("The superheroes total weight of DC comics: " + totalWeightsMC + ".");

//8. Heviest superhero
const superHeroeHeviest = superheroes
    .filter((hero) => hero.weight != "unknown")
    .reduce((prev, current) => (+prev.weight > +current.weight ? prev : current));

console.log(
    "The superhero with the highest weight is: " +
    superHeroeHeviest.name +
    " , weight of " +
    superHeroeHeviest.weight + "."
);