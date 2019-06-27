var toggleElement = $('#toggle');
var menu = $('.nav-mobile');
var closeToggle = $('.x');

toggleElement.click(function() {
    menu.addClass( 'opened' );
});
closeToggle.click(function(){
    menu.removeClass('opened')
})
