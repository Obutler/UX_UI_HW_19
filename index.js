console.log("loaded correctly");

$(document).ready(function() {
    $('#downloadButton').mousedown(function() {
        $(this).addClass('active');
    });

    $('#downloadButton').mouseup(function() {
        var button = $(this);
        button.html('Downloaded!');
        button.addClass('clicked');
        button.prop('disabled', true); // Disable the button during cooldown

        setTimeout(function(){
            button.removeClass('clicked');
            button.html('Download Resume');
            button.prop('disabled', false); // Re-enable the button after cooldown
        }, 10000); // 10000 milliseconds = 10 seconds
    });
});

