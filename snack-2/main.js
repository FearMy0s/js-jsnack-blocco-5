const zucchine = [
    {
        varieta: "zucchina 1",
        peso: 15,
        lunghezza: 20,
    },
    {
        varieta: "zucchina 2",
        peso: 24,
        lunghezza: 10,
    },
    {
        varieta: "zucchina 3",
        peso: 32,
        lunghezza: 13,
    },
    {
        varieta: "zucchina 4",
        peso: 43,
        lunghezza: 2,
    },
    {
        varieta: "zucchina 5",
        peso: 57,
        lunghezza: 3,
    },
    {
        varieta: "zucchina 6",
        peso: 62,
        lunghezza: 4,
    },
    {
        varieta: "zucchina 7",
        peso: 37,
        lunghezza: 6,
    },
    {
        varieta: "zucchina 8",
        peso: 81,
        lunghezza: 12,
    },
    {
        varieta: "zucchina 9",
        peso: 29,
        lunghezza: 17,
    },
    {
        varieta: "zucchina 10",
        peso: 13,
        lunghezza: 22,
    },
];
group1 =[];
group2=[];
let pesotot = 0;
let pesototg1 = 0;
let pesototg2= 0;

for (let i = 0; i < zucchine.length; i++) {
    pesotot+= zucchine[i].peso;
    if (zucchine[i].lunghezza < 15) {
        group1.push(zucchine[i]);
        pesototg1+= pesotot;
    } else {
        group2.push(zucchine[i]);
        pesototg2+= pesotot;
    }
}

console.log(pesototg1,group1);
console.log(pesototg2,group2);