const auto = [
    {
        marca: "ford",
        modello: "cabrio",
        alimentazione: "brenzina",
    },
    {
        marca: "ford",
        modello: "cabrio",
        alimentazione: "diesel",
    },
    {
        marca: "ford",
        modello: "cabrio",
        alimentazione: "metano",
    },
    {
        marca: "ford",
        modello: "cabrio",
        alimentazione: "diesel",
    },
    {
        marca: "ford",
        modello: "cabrio",
        alimentazione: "metano",
    },
    {
        marca: "ford",
        modello: "cabrio",
        alimentazione: "metano",
    },
    {
        marca: "ford",
        modello: "cabrio",
        alimentazione: "brenzina",
    },
    {
        marca: "ford",
        modello: "cabrio",
        alimentazione: "diesel",
    },
    {
        marca: "ford",
        modello: "cabrio",
        alimentazione: "metano",
    },
    {
        marca: "ford",
        modello: "cabrio",
        alimentazione: "diesel",
    },
];
const autoBrenzina = auto.filter(auto => auto.alimentazione == "Brenzina");
const autoDiesel = auto.filter(auto => auto.alimentazione == "diesel");
const autoAltro = auto.filter(auto => auto.alimentazione !== "diesel" && auto.alimentazione !== "Brenzina");
console.log(autoBrenzina, autoDiesel, autoAltro);