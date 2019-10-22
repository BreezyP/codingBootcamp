/*

$('#circle').click(() => {
    alert('Clicked')
});

$('#circle').hover(() => {
    $('p').html("We've changed the text!!!");
});

$('.square').click(() => {
   $(this).css('width', '400px');
});

 */

$(() => {
    $('#draggable').draggable();
});

$(() => {
    $('#sortable').sortable();
});