/*
Step 1: Need to get the pets name 
                (petsname)
step 2: both happiness and energy level start at 0
step 3: need to loop 6x asking if they:
    -feed (increases energy by 2)
    -pet (increases happiness by 1)
    -walk (increases happiness by 2 but decreases energy by 1)
step 4: if user chooses walk but energy is at 0: alert - "Not enough energy to enjoy a walk"
    -if (total <= 0) send alert
*/
// start at 0
let energy = 0;
let happiness = 0;
// get pet name
let petname = prompt("Name your pet");
// loop 6 times
for (let i = 0; i < 6; i++) {
    let action = prompt("feed, pet, or walk?");
    // figure out score
    if (action === "feed") {
        energy += 2;
    } else if (action === "pet") {
        happiness += 1;
    } else if (action === "walk") {
        // check if we have enough energy before walking
        if (energy === 0) {
            alert('Not enough energy to enjoy a walk.');
        } else {
            happiness += 2;
            energy -= 1;
        }
    }
}

console.log(petname + ' has ' + happiness + ' happiness and ' + energy + ' energy.');



