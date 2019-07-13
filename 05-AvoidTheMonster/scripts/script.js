var monsters = [
    'sock!',
    'monster1.svg',
    'monster2.svg',
    'monster3.svg',
    'monster4.svg',
    'monster5.svg',
    'monster6.svg',
    'monster7.svg',
    'monster8.svg',
    'monster9.svg',
    'monster10.svg',
    'monster11.svg'
];

let doors = document.getElementsByClassName("door");

function pickMonster() {
    let door = this;
    let randomMonster = Math.floor(Math.random() * monsters.length);

    if (randomMonster === 0) {
        alert("You lose!");
        location.reload();
    }

    door.style.background = `url(./images/${monsters[randomMonster]}) no-repeat center`;
    door.removeEventListener('click', pickMonster);

    monsters.splice(randomMonster, 1);

    if (monsters.length === 1 && monsters[0] === 'sock!') {
        alert("You win!");
        location.reload();
    }
}

for (let i = 0; i < doors.length; i++) {
    doors[i].addEventListener('click', pickMonster);
}




