const rawData = [{
        nama: 'andi',
        tempat_lahir: 'jakarta',
        usia: 28,
        tabungan: 25000,
        hutang: 2000
    },
    {
        nama: 'budi',
        tempat_lahir: 'tangerang',
        usia: 21,
        tabungan: 32000,
        hutang: 10000
    },
    {
        nama: 'candra',
        tempat_lahir: 'jakarta',
        usia: 19,
        tabungan: 55000,
        hutang: 0
    },
    {
        nama: 'doni',
        tempat_lahir: 'jakarta',
        usia: 32,
        tabungan: 12000,
        hutang: 15000
    },
    {
        nama: 'eka',
        tempat_lahir: 'jakarta',
        usia: 29,
        tabungan: 32000,
        hutang: 20000
    },
]

// Soal 1 Memprint data dengan kriteria tempat lahir di jakarta dan usia > 30

var arraySoal1 = rawData.filter(rawData => rawData.tempat_lahir == 'jakarta' && rawData.usia > 30);
console.log(arraySoal1);

// Soal 2 Memprint data soal nomor 1 dengan ditambah properti saldo(tabungan - hutang)

let arraysoal2 = [];
for (let i = 0; i < rawData.length; i++) {
    if (rawData[i].tempat_lahir == 'jakarta' && rawData[i].usia > 30) {
        arraysoal2.push(rawData[i])
    }
}

const totalsaldo = arraysoal2.map(item => ({
    nama: item.nama,
    tempat_lahir: item.tempat_lahir,
    usia: item.usia,
    tabungan: item.tabungan,
    hutang: item.hutang,
    saldo: item.tabungan - item.hutang
}));

console.log(totalsaldo);

// tambahan print all data with saldo

const alltotalsaldo = rawData.map(item => ({
    nama: item.nama,
    tempat_lahir: item.tempat_lahir,
    usia: item.usia,
    tabungan: item.tabungan,
    hutang: item.hutang,
    saldo: item.tabungan - item.hutang
}));

console.log(alltotalsaldo);
