// Dropdown animation
$('.ui.dropdown')
  .dropdown()

// Message animation
$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
  })