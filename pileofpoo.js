$(window).ready(function () {
    if((navigator.userAgent.toLowerCase().indexOf('firefox') > -1) || (navigator.userAgent.toLowerCase().indexOf('safari') > -1 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1)) {
        var replaceWith = '&#128169;'; 
    } else {
        var replaceWith = '<img src="assets/1f4a9.png" title="this is smelly" />';
    }
    $('body').html($('body').html().replace("&amp;poo;",replaceWith)); 
});
