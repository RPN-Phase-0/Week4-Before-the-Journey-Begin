/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
    //code di sini
    let result = '';
    let vokal = 'aiueoAIUEO';
    let abjad = 'bjvfpBJVFP';
    for (let i = 0; i < str.length; i++) {
      let check = false;
      for (let j = 0; j < vokal.length; j++) {
        if (str[i] === vokal[j]) {
          result += abjad[j];
          check = true;
        }
      }
      if (check === false) {
        result += str[i];
      }
    }
    return result
  }

  
  function reverseWord (str) {
    //code di sini
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return changeVocals(result);
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    let result = '';
    for(let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase()) {
        result += str[i].toUpperCase();
      } else {
        result += str[i].toLowerCase();
      }
    }
    return reverseWord(result);
  }
  
  function removeSpaces (str) {
    //code di sini
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        result += str[i];
      }
    }
    return setLowerUpperCase(result);
  }
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
      return removeSpaces(name);
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'