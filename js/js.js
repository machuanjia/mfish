/**
 * Created by yanshi0429 on 15/7/7.
 */
(function($){
    $.ff = function(options) {
    }
})(jQuery);
$(document).ready(function(){
    $('#index_power_type').click(function(){
        $('#body').scrollTop(850)
    });
    $('#index_ear_type').click(function(){
        $('#body').scrollTop(1750)
    })
    $('#index_shell_type').click(function(){
        $('#body').scrollTop(2200)
    })
    $('#index_board_type').click(function(){
        $('#body').scrollTop(2650)
    })
    $('#index_cloth_type').click(function(){
        $('#body').scrollTop(3100)
    })
    $('#index_write_type').click(function(){
        $('#body').scrollTop(3550)
    });




    $('#pop_us_close').click(function(){
        $('#pop_us_wrap').hide('fast');
    });
    $('#about_us').click(function(){
        $('#pop_us_wrap').show('fast');
    });

});

