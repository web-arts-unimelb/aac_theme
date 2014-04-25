(function ($) {
  Drupal.behaviors.aac = {
    attach: function(context, settings) {
			var pathname = $(location).attr('pathname');
			if(pathname == '/asian-australian-cinema/films') {
				$('.aac_nav').removeClass('active');
				$('.aac_nav.film').addClass('active');	
			} 
			else if(pathname == '/asian-australian-cinema/directors') {
				$('.aac_nav').removeClass('active');
        $('.aac_nav.dir').addClass('active');
			}
			else if(pathname == '/asian-australian-cinema/production_companies') {
        $('.aac_nav').removeClass('active');
        $('.aac_nav.com').addClass('active');
      }
			else if(pathname == '/asian-australian-cinema/categories') {
        $('.aac_nav').removeClass('active');
        $('.aac_nav.cat').addClass('active');
      }
			else if(pathname == '/asian-australian-cinema/search') {
        $('.aac_nav').removeClass('active');
        $('.aac_nav.search').addClass('active');
      }	
		}
	}
})(jQuery);
