import { Dragon, Habitat } from "./interfaces";
import * as readline from 'readline-sync';


fetch('https://raw.githubusercontent.com/Tromsbonen/Web-ontwikkeling-taak/refs/heads/main/dragons.json')
    .then((response) => response.json())
    .then((data: Dragon[]) => {
        mainFunction(data)
    })
    .catch((error) => console.error('Error fetching data:', error));

function mainFunction(data: Dragon[]) {
    let inputChoices : string[] = ["View all data", "Filter by ID", "Exit"]
    let choice : number = readline.keyInSelect(inputChoices, "Welcome to the JSON data viewer!", {cancel : false})

    switch (choice) {
        case 0:
            for (let dragon of data) {
                console.log(`- ${dragon.name} (${dragon.id})`)
            }
            break;
        case 1:
            let choice : number = readline.questionInt("Please enter the ID you want to filter by: ")
            let findDragon = data.find(dragon => dragon.id === choice)
            if (findDragon) {
                console.log(`- ${findDragon.name} (${findDragon.id})`)
                console.log(`   - Description: ${findDragon.description}`)
                console.log(`   - Power Level: ${findDragon.powerLevel}`)
                console.log(`   - Legendary: ${findDragon.isLegendary}`)
                console.log(`   - Discovered on: ${findDragon.discoveredOn}`)
                console.log(`   - Image: ${findDragon.imageUrl}`)
                console.log(`   - Type: ${findDragon.type}`)
                console.log(`   - Moves: ${findDragon.moves}`)
                console.log(`   - Habitat: ${findDragon.habitat.name}`)
                console.log(`       - Name: ${findDragon.habitat.name}`)
                console.log(`       - Climate: ${findDragon.habitat.climate}`)
                console.log(`       - Caves: ${findDragon.habitat.hasCaves}`)
            }
            break;
        case 2:
            break;
}
}