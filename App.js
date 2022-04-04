// Como eu fiz o Scroll suave <3
$('.menu-nav a').click(function (e) {
  e.preventDefault();
  var id = $(this).attr('href');
  console.log(id);
  targetOffset = $(id).offset().top;
  $('html,bady').animate(
    {
      scrollTop: targetOffset - 86,
    },
    500,
  );
});

$('.menu-btn').click(function () {
  $(this).toggleClass('active');
});
