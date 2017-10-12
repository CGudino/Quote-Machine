$(document).ready(function() {
  $('#get-quote').on('click', function() {
    $.getJSON('https://talaikis.com/api/quotes/random/', function(json) {
      var html = '';
      
      html += "<p id='random-quote'><strong>'";
      html += json.quote;
      html += "'</strong></p>";
      
      html += "<p id='quote-author'><em>-";
      html += json.author;
      html += "</em></p>";
      
      $('#quote-box').html(html);
      $('#tweet-link').attr('href', 'https://twitter.com/intent/tweet?text=' + json.quote + ' -' + json.author);
      });
   });
});