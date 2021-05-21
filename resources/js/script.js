const monToThursOpening = '8am - 2pm';
const fridayOpening = '8am - 2pm & 5pm - 9pm';
const saturdayOpening = '5pm - 9pm';

$(document).ready(() => {


    $('.cuisine-list').css('top', $('#bespoke-nav').css('height'));
    $('#opening-hours').html(
        `<p class="openBrokenPara">Open Monday - Thursday ${monToThursOpening}</p>
        <p class="openBrokenPara">Friday ${fridayOpening}</p>
        <p class="openBrokenPara">Saturday ${saturdayOpening}</p>`
    );
    $('#map-opening-hours').html(
        `<p class="openBrokenPara">Open Monday - Thursday ${monToThursOpening}</p>
        <p class="openBrokenPara">Friday ${fridayOpening}</p>
        <p class="openBrokenPara">Saturday ${saturdayOpening}</p>`
    )
    

    $('.tab').on('click',  event => {
        const id = `#${$(event.currentTarget).html().toLowerCase()}`;
        $(id).addClass('active-cuisine-container').siblings('.cuisine-container').removeClass('active-cuisine-container');
        $(event.currentTarget).addClass('active').siblings().removeClass('active');
        
    })

})