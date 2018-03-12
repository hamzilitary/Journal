import './styles.css';
import { numberOfWords, numberOfVowels, numberOfConsts, getTeaser} from './journal';
// $(document).ready(function() {
//
//   $("#vowelButton").click(function(event) {
//     event.preventDefault();
//     $("#result").html("<li>" + outPut + "</li>");
//       $(".resultBox").fadeIn(900);


$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var entry = $('#entry').val();
    var output1 = numberOfWords(entry);
    var output2 = numberOfVowels(entry);
    var output3 = numberOfConsts(entry);
    var output4 = getTeaser(entry);
    $('#solution').append("<li>words : " + output1 + "</li>");
    $('#solution').append("<li>vowels: " + output2 + "</li>");
    $('#solution').append("<li>consts: " + output3 + "</li>");
    $('#solution').append("<li>teaser: " + output4 + "</li>");
  });
});
