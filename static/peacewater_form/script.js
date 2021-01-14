$("input[name='drinkingwater']").on("click", function() {
    $("#DrinkingwaterServiceOptions").toggleClass('show');
    $("#WastewaterServiceOptions").toggleClass('show');
    $("#SolidwasteServiceOptions").toggleClass('show');
});

$("input[name='wastewater']").on("click", function() {
    $("#DrinkingwaterServiceOptions").toggleClass('hide');
    $("#WastewaterServiceOptions").toggleClass('show');
    $("#SolidwasteServiceOptions").toggleClass('hide');
});

$("input[name='solidwaste']").on("click", function() {
    $("#DrinkingwaterServiceOptions").toggleClass('hide');
    $("#WastewaterServiceOptions").toggleClass('hide');
    $("#SolidwasteServiceOptions").toggleClass('show');
});
