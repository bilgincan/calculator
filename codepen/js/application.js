$(document).ready(function(){
    var history = [];
    var $buttons = $(".calculator-button");

    var $pad_area = $("#pad");
    var $history_tab = $("#history-tab");

    var special_symbols = ['+', '-', '*', '/'];

    $buttons.click(function(e){
        var buttons_value = this.value;
        var pad_area_value = $pad_area.val();

        if(buttons_value == '='){
            var before_execution_value = pad_area_value;
            var calculation_result = eval(before_execution_value);
            
            $pad_area.val(calculation_result);
            history.push(before_execution_value + '=' + calculation_result);

            $history_tab.html(history.join('<br/>'));
            return;
        }
        
        var last_char_of_pad_area = pad_area_value[pad_area_value.length - 1];
        
        if($.inArray(last_char_of_pad_area, special_symbols) && buttons_value == last_char_of_pad_area){
            return;
        }
        
        // for(var i=0; i < special_symbols.length; i++){
        //     if(special_symbols[i] == last_char_of_pad_area && buttons_value == special_symbols[i]){
        //         return;
        //     }
        // }
        
        $pad_area.val(pad_area_value + buttons_value);
    });
});

