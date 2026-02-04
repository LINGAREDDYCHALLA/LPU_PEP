function BuyMaggie(cb) {
    console.log("Maggie bought from store 🛒");

    setTimeout(function () {
        console.log("Maggie preparation started 🍲");
        cb();   // call next step after buying
    }, 2000);
}

function MakeMaggie(cb) {
    console.log("Boiling water... 💧");

    setTimeout(function () {
        console.log("Maggie is cooked 🍜");
        cb();   // call next step after cooking
    }, 3000);
}

function EatingMaggie() {
    console.log("Eating Maggie 😋");
}

//Calling in sequence using callbacks
BuyMaggie(function () {
    MakeMaggie(function () {
        EatingMaggie();
    });
});
