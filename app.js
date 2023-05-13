/*
Bankacı Mahmut'un yardımınıza ihtiyacı var. Müşterilerin isimlerinin olduğu iki farklı array var. 
Lakin yanlışlıkla her iki array içerisinde de ismi yazılmış müşteriler var. 
Bizden isteği ise müşterilerin isimlerinden A'dan Z'ye doğru bir defa yazılmış olarak yeniden array oluşturmak.

// let yeniArray = [ "Müsterileri bu sekilde yeni bir array icerisinde toplamaniz isteniliyor"  ]
*/

let array1 = ["Zeki", "Mehmet", "Fatma", "Halil", "Ahsen", "Zeynep", "Burak"];
let array2 = ["Halil", "Veli", "Kerim", "Zeki", "Neriman", "Fatma", "Semih"];


let fullArr = [...array1,...array2];
let newArr = [];

for(let i = 0; i < fullArr.length; i++){
    if(!newArr.includes(fullArr[i])){
        newArr.push(fullArr[i]);
    }
}
//newArr.sort((a,b) => a.localeCompare(b));
newArr.sort();
console.log(newArr);



/*
let fullArr = [...array1,...array2];
let newArr = []

for(let i = 0; i < fullArr.length; i++){
    let x = fullArr.filter(e => e === fullArr[i])
    if( x.length === 1){
       newArr.push(fullArr[i]);
    }
    if( x.length > 1){

    }
}
newArr.sort((a,b) => a.localeCompare(b));
console.log(newArr);

*/





