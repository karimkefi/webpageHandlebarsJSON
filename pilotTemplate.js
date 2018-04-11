// JSON FILE LOCAITON:  https://dev.maydenacademy.co.uk/resources/FE/products.json

$.get('pilotTemplate.hbs', function (data) {
    var source = data;
    var templateMethod = Handlebars.compile(source);

    $.get('products.json', function (data) {
        var html = templateMethod(data)
        $('.productContainer').append(html)
    })

})

