export function numberOfWords (entry) {
// export function journaling(vowel){
// var newArray = []
//     var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//     var sentence = $("#vowel").val().toString();
//     letterArray = sentence.split("")
//     for (i = 0; i <= vowels.length - 1; i++) {
//       for (x = 0; x <= letterArray.length - 1; x++) {
//         if (letterArray[x] !== vowels[i]) {
//           newArray[x] = letterArray[x];
//         } else if (letterArray[x] === vowels[i]) {
//           newArray[x] = letterArray[x].replace(vowels[i], "_");
//           letterArray[x] = newArray[x];
//         }
//       }
//       var outPut = letterArray.join("");
//     }
//   }
  return entry.split(" ").length;
}

export function numberOfVowels(entry) {
  var count = 0;

  for (var i = 0; i < entry.length; i++) {
    if ("aeiouAEIOU".includes(entry[i])) {
      count++;
    }
  }

  return count;
}

export function numberOfConsts(entry) {
  var count = 0;

  for (var i = 0; i < entry.length; i++) {
    if (!"aeiouAEIOU ".includes(entry[i])) {
      count++;
    }
  }

  return count;
}

export function getTeaser(entry) {
  var words = entry.split(" ");
  words.splice(8);
  return words.join(' ');
}
