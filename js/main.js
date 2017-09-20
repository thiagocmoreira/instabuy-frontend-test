$('.ui.dropdown')
  .dropdown()

$('.special.cards .image')
  .dimmer({
    on: 'hover'
  })

$('.ui.rating')
  .rating()

$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
  })