$(document).ready(function() {
   $('.scrollTo').on('click', function(e) {
       var linkHref = $(this).attr('href');
       
       $('html, body').animate( {
           scrollTop: $(linkHref).offset().top}, 750);
       
       e.preventDefault();
   });
});