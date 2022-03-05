$(document).ready(function () {
	var scroll_pos = 0
	$(document).scroll(function () {
		scroll_pos = $(this).scrollTop()
		if (scroll_pos > 210) {
			$('#navbar-fix').addClass('gradient')
		}
	})

   
   $('#prods').on('show.bs.collapse', function () {
      $('.fa-angle-down').addClass('arrow-down');
   });
   $('#prods').on('hide.bs.collapse', function () {
      $('.fa-angle-down').removeClass('arrow-down');
   });
})
const openNav = () => {
	$('#navbarContent').toggleClass('h-100')
	$('#navbar-icon').toggleClass('fa-solid fa-xmark')
	$('#navbar-icon').toggleClass('fa-solid fa-bars')
   $('#btn-login, #menu-list').toggleClass('d-none')
}
