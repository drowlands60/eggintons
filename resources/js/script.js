const monToFriOpening = '8am - 2pm';


$(document).ready(() => {


    $('.cuisine-list').css('top', $('#bespoke-nav').css('height'));
    $('#opening-hours').html(
        `<p class="openBrokenPara">Open Monday - Friday ${monToFriOpening}</p>`
    );
    $('#map-opening-hours').html(
        `<p class="openBrokenPara">Open Monday - Friday ${monToFriOpening}</p>`
    )
    

    $('.tab').on('click',  event => {
        const id = `#${$(event.currentTarget).html().toLowerCase()}`;
        $(id).addClass('active-cuisine-container').siblings('.cuisine-container').removeClass('active-cuisine-container');
        $(event.currentTarget).addClass('active').siblings().removeClass('active');
        
    })

})