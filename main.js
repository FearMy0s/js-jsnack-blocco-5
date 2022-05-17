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
const autoBrenzina = auto.filter(auto => auto.alimentazione == "brenzina");
const autoDiesel = auto.filter(auto => auto.alimentazione == "diesel");
const Altro = auto.filter(auto => auto.alimentazione !== "diesel" && auto.alimentazione !== "brenzina");
console.log(autoBrenzina, autoDiesel, Altro);