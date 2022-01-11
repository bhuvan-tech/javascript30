const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log("Do Epit Shit");

    // Interpolated
    const vari='Inception';
    console.log("You are already dead %s",'shinigami');
    console.log(`This is the beginning of ${vari}`);
    // Styled
    console.log("%c this is changed ","background:red; font-size:30px; text-shadow: green");

    // warning!
    console.warn("there is a plothole ahead");

    // Error :|
    console.error("there is a plothole ahead");


    // Info
    console.info("hehe");

    // Testing
    let p = document.querySelector('p');
    console.assert(1 === 2,'thats wrong');
    console.assert(p.classList.contains('omg'),'it does not contain');

    // clearing
    // console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);
    // Grouping together

    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.group(`this is dog's name ${dog.name}`);
        console.group(`this is dog's age ${dog.age}`);
        console.group(`this is dog's age ${dog.age  +10}`);
        console.groupEnd(`${dog.name}`);
    })
    // counting
    console.count('man')
    console.count('man')
    console.count('man')
    console.count('man')
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    
    // timing

console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

console.table(dogs);