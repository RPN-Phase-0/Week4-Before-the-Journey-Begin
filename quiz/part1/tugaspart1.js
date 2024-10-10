/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
  // code di sini
}

function getTotal(arrNumber) {
  // code di sini
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''

/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu 
(ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  //code di sini
  let hurufVokal = "aiueoAIUEO"

  let huruf = str.split('')
  
  for (let i = 0; i < str.length; i++) {

    for (let a = 0; a < hurufVokal.length; a++) {
      if (str[i] == hurufVokal[a]) {
        let asci = str.charCodeAt(i)
    
        huruf[i] = String.fromCharCode(asci + 1)
      }
    }
    
  }
  
  return huruf;
}

function reverseWord (str) {
  //code di sini
  
  return str.reverse()
}

function setLowerUpperCase (str) {
  //code di sini
  let hasil = str

 for (let i = 0; i < str.length; i++) {
  if (hasil[i] == hasil[i].toUpperCase()) {
    hasil[i] = hasil[i].toLowerCase()
  }else if (hasil[i] != hasil[i].toUpperCase())
    hasil[i] = hasil[i].toUpperCase()
  
 }

  return hasil
}

function removeSpaces (str) {
  //code di sini
  if (str.length <= 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }

  let remove = str.join("")

  return remove.replace(/\s+/g, ""); 
}

function passwordGenerator (name) {
  //code di sini
  let changeVocals1 = changeVocals(name)
  let reverseWord1 = reverseWord(changeVocals1)
  let setLowerUpperCase1 = setLowerUpperCase(reverseWord1)
  let removeSpaces1 = removeSpaces(setLowerUpperCase1)

  return removeSpaces1;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
