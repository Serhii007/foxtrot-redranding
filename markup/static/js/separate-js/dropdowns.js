$(document).ready(function() {

	var dDownToggler = $(".dropdown-toggler");
	var slideDropDown = $(".slide-dropdown");
	var simpleDropDown = $(".simple-dropdown");
	var dropDownArrow = $(".dropdown-arrow");

	dDownToggler.each(function(i) {

		dDownToggler.eq(i).click(function() {
			slideDropDown.eq(i).slideToggle();
			simpleDropDown.eq(i).toggle();
			dropDownArrow.eq(i).toggleClass("rotate");
		});
	});
});