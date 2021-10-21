/*
Script controlling the accordion effect on the Read More links of index.html
Originally this script was in-line on the ads-test-application-page.html due to the way
Squarespace allows custom scripts to be placed on their pages.
 */


(document).ready(function(){
$('.ReadMore').addClass('ui-closed').css('cursor','pointer');
$(".ReadMore").nextUntil("h2").slideToggle();
$(".ReadMore").click(function() {

$(this).nextUntil("img").slideToggle();
$(this).toggleClass('ui-closed ui-open');
});
});
