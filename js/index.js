$(document).ready(function() {
  function newBackground() {
    var colors = ['red', 'blue', 'gray', 'pink', 'purple', 'yellow'];
    var choice = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[choice];
  }
  
  $('#get-quote').on('click', function() {
    $.getJSON('https://talaikis.com/api/quotes/random/', function(json) {
      
      // Adds quote and author to page
      $('#quote-box').html(`<p id='random-quote'><strong>${json.quote}</strong></p><p id='quote-author'><em>-${json.author}</em></p>`);
      
      // Button to tweet the current quote
      $('#tweet-link').attr('href', `https://twitter.com/intent/tweet?text=${json.quote} -${json.author}`);
      newBackground();
      });
   });
});
