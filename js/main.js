$(document).ready(()=>{

  const all = $('.panel-body').hide();
  $('.active').show();

  $('.section').click(function(e){
    e.preventDefault();
    const self = $(this);

    all.slideUp();
    self.closest("div").next().slideDown();
  });
});
