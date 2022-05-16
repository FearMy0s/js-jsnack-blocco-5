const zucchine = [
    {
        varieta: "zucchina 1",
        peso: 15,
        lunghezza: "1cm",
    },
    {
        varieta: "zucchina 2",
        peso: 24,
        lunghezza: "2cm",
    },
    {
        varieta: "zucchina 3",
        peso: 32,
        lunghezza: "3cm",
    },
    {
        varieta: "zucchina 4",
        peso: 43,
        lunghezza: "4cm",
    },
    {
        varieta: "zucchina 5",
        peso: 57,
        lunghezza: "5cm",
    },
    {
        varieta: "zucchina 6",
        peso: 62,
        lunghezza: "6cm",
    },
    {
        varieta: "zucchina 7",
        peso: 37,
        lunghezza: "7cm",
    },
    {
        varieta: "zucchina 8",
        peso: 81,
        lunghezza: "8cm",
    },
    {
        varieta: "zucchina 9",
        peso: 29,
        lunghezza: "9cm",
    },
    {
        varieta: "zucchina 10",
        peso: 13,
        lunghezza: "10cm",
    },
];

let pesotot = 0;
for (let i = 0; i < zucchine.length; i++) {
    pesotot += zucchine[i].peso;
}

console.log(pesotot);