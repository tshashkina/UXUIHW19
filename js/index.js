/* Test to make sure your JavaScript file is loaded corectly */

/*console.log("Your index.js file is loaded correctly");*/

/*$("button").hover(function() {
    console.log("You hovered on button");
});*/

$("button").hover(function() {
    $(this).css('background-color', 'grey');
}, function() {
    $(this).css('background-color', 'transparent');
});


$("button").click(function() {
    $(this).css('background-color', 'white');
    $(this).css('color', 'black');

});






