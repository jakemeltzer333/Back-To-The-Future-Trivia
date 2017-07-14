$(function () {
  console.log('js connected');
  function loadTitle () {
  console.log('title screen loaded');
  let $container = $('<div>');
  $container.attr('id', 'container');
  $container.appendTo('body');
  let $titleScreen = $('<div>');
  $titleScreen.addClass('title-screen');
  $titleScreen.appendTo('#container');
  let $header = $('<header>');
  $header.addClass('header');
  $header.appendTo('.title-screen');
  let $subhead = $('<h2>');
  $subhead.addClass('subhead');
  $subhead.appendTo('.title-screen');
  let $poster = $('<img id = "poster">');
  $poster.appendTo('.title-screen');
  let $footer = $('<footer>');
  $footer.appendTo('.title-screen');
  let $start = $('<button>');
  $start.addClass('start');
  $start.appendTo('footer');
  let $buttonImage = $('<img>', {class: 'start-button'});
  $buttonImage.appendTo('.start');

}
loadTitle();

})
