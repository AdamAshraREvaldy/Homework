// Membuat array kosong
var arr = [];
var arrGenap = [];
var arrGanjil = [];
for( i = 1; i <= 100; i++){
    var nilaiAcak = Math.floor(Math.random() * 100) + 1;
    arr.push (nilaiAcak);
    
}
console.log('Array Bilangan Random : \n' + arr)
console.log('')

// function array genap dan ganjil
function arrayGanjilGenap(){
    for(var i = 0; i < arr.length; i++){
        if( arr[i] % 2 == 0){
            arrGenap.push(arr[i])
        }
        else{
            arrGanjil.push(arr[i])
        }
    }
}

arrayGanjilGenap();
console.log("Bilangan Ganjil:", arrGanjil);
console.log("Panjang Bilangan Ganjil:", arrGanjil.length);
console.log('')
console.log("Bilangan Genap:", arrGenap);
console.log("Panjang Bilangan Genap:", arrGenap.length);
console.log('')
// Mencari Nilai MinMax Array genap

function nilaiMinMaxGenap(arrGenap){
    if (arrGenap.length === 0) {
        return { minGenap: null, maxGenap: null };
    }

    var minGenap = arrGenap[0];
    var maxGenap = arrGenap[0];
    for( var i = 1; i < arrGenap.length; i++){
        if(arrGenap[i] < minGenap){
            minGenap = arrGenap[i]
        }
        if(arrGanjil[i] > maxGenap){
            maxGenap = arrGenap[i]
        }
    }
    return { minGenap: minGenap, maxGenap: maxGenap };
}

var hasil = nilaiMinMaxGenap(arrGenap);
console.log("Array Genap :", arrGenap);
console.log('Nilai Minimum Pada Array Genap : ' + hasil.minGenap)
console.log('Nilai Maksimum Pada Array Genap: '+ hasil.maxGenap)


// Mencari Nilai Min Max Array

function nilaiMinMaxGanjil(arrGanjil){
    if (arrGanjil.length === 0) {
        return { minGanjil: null, maxGanjil: null };
    }

    var minGanjil = arrGanjil[0];
    var maxGanjil = arrGanjil[0];
    for( var i = 1; i < arrGanjil.length; i++){
        if(arrGanjil[i] < minGanjil){
            minGanjil = arrGanjil[i]
        }
        if(arrGanjil[i] > maxGanjil){
            maxGanjil = arrGanjil[i]
        }
    }
    return { minGanjil: minGanjil, maxGanjil: maxGanjil };
}

var hasil = nilaiMinMaxGanjil(arrGanjil);
console.log("Array Ganjil :", arrGanjil);
console.log('Nilai Minimum Pada Array Ganjil : ' + hasil.minGanjil)
console.log('Nilai Maksimum Pada Array Ganjil: '+ hasil.maxGanjil)

// Menghitung total dan rata rata Array Genap

function totalDanRataRataArrayGenap(arrGenap){
    var total = 0
    for (var i = 0; i < arrGenap.length; i++){
        total += arrGenap[i];
    }
    //console.log('Total Array Genap ' + arrGenap );
    console.log('Total Array Genap adalah ' + total)
    var rerata = total / arrGenap.length
    console.log("Rerata pada array genap adalah " + rerata)
}

totalDanRataRataArrayGenap(arrGenap);

// Menghitung total dan rata rata Array Ganjil

function totalDanRataRataArrayGanjil(arrGanjil){
    var total = 0
    for (var i = 0; i < arrGanjil.length; i++){
        total += arrGanjil[i];
    }
    //console.log('Total Array Ganjil ' + arrGanjil );
    console.log('Total Array Ganjil adalah ' + total);
    var rerata = total / arrGanjil.length;
    console.log("Rerata pada array Ganjil adalah " + rerata);
}
totalDanRataRataArrayGanjil(arrGanjil);





// Perbandingan nilai min, max, total dan rata rata

console.log('')
console.log('Perbandingan nilai min, max, total dan rata rata')

var hasil = nilaiMinMaxGenap(arrGenap);
console.log('Nilai Minimum Pada Array Genap : ' + hasil.minGenap)
console.log('Nilai Maksimum Pada Array Genap: '+ hasil.maxGenap)

var hasil = nilaiMinMaxGanjil(arrGanjil);
console.log('Nilai Minimum Pada Array Ganjil : ' + hasil.minGanjil)
console.log('Nilai Maksimum Pada Array Ganjil: '+ hasil.maxGanjil)

totalDanRataRataArrayGanjil(arrGanjil);
totalDanRataRataArrayGenap(arrGenap);


