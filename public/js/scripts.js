// $('button.btn-primary').on('click', function() {
//   var value = $(this).siblings('select').val()
//   $('.itinerary-item').children('span').text(value);
//   // console.log(
//   // );
// })

$(function () {

    var map = initialize_gmaps();

    var createItineraryItem = function (placeName) {

        var $item = $('<li></li>');
        var $div = $('<div class="itinerary-item"></div>');

        $item.append($div);

        $div.append('<span class="title">'+ placeName +'</span>');
        $div.append('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');

        return $item;

    };

    var getPlaceObject = function (typeOfPlace, nameOfPlace) {

        var placeCollection = window['all_' + typeOfPlace];

        return placeCollection.filter(function (place) {
            return place.name === nameOfPlace;
        })[0];

    };

    $('.add-place-button').on('click', function () {

        var $this = $(this);
        var sectionName = $this.parent().attr('id').split('-')[0];
        var $listToAppendTo = $('#' + sectionName + '-list').children('ul');
        var placeName = $this.siblings('select').val();
        var placeObj = getPlaceObject(sectionName, placeName);

        drawLocation(map, placeObj.place[0].location);
        $listToAppendTo.append(createItineraryItem(placeName));

    });

});
