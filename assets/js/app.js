$(document).ready(function () {
	var scroll_pos = 0
	$(document).scroll(function () {
		scroll_pos = $(this).scrollTop()
		if (scroll_pos > 210) {
			$('#navbar-fix').addClass('gradient')
		}
	})
})
const openNav = () => {
	$('#navbarContent').toggleClass('h-100')
	$('#navbar-icon').toggleClass('fa-solid fa-xmark')
	$('#navbar-icon').toggleClass('fa-solid fa-bars')
   $('#btn-login, #menu-list').toggleClass('d-none')
}
