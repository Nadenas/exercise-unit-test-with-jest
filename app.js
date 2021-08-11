// esta es mi función que suma dos números
/*const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };*/

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromDollarToYen (dollar) {
    let yen = (dollar/oneEuroIs["USD"])*oneEuroIs["JPY"];
    return yen;
}
fromDollarToYen(3.5);

function fromEuroToDollar (euro) {
    let dollar = (euro*oneEuroIs["USD"]);
    return dollar;
}
fromEuroToDollar(3.5);

function fromYenToPound (yen) {
    let pound = (yen/oneEuroIs["JPY"])*oneEuroIs["GBP"];
    return pound;
}
fromYenToPound(3.5);

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
