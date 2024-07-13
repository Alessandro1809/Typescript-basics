(()=>{
    type Hero = {
        name: string,
        age: number,
        weapons: string[]
    }

    const ironman:Hero = {
        name: 'Tony',
        age: 45,
        weapons: ['armorsuit', 'laser', 'plasma']
    }
    const captainAmerica ={
        name: 'Steve',
        age: 100,
        weapons: ['shield', 'supperstrength', 'papucho']
    }


    const thor:Hero = {
        name: 'Thor',
        age: 1000,
        weapons: ['hammer', 'armormsuit', 'axe']
    }

    const avengers:Hero[] = [ironman, captainAmerica, thor];

    for (const avenger of avengers) {//for of recorre arreglos
        console.log(avenger.age, avenger.name, avenger.weapons);
    }

})()
