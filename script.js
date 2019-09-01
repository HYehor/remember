jQuery('document').ready(function(){  //ready событие, которое происходит когда была загружена страница

    //add link
    //jQuery('body').append('<a href="http://google.com">Go to Google!</a>');

    //delete div
    //$('div').remove();

    //create variable p_clone
    //var p_clone;
    //p_clone=$('p').clone();
    //$('body').append(p_clone);

    //work with button
    //$('button').on('click', function(){
        //alert('You click on button dude!');

        //var value1, value2;
        //value1=$('#val1').val(); //val - достает(возвращает) значение, но только делает его строковым
        //value2=$('.val2').val();

        //value1 = parseInt(value1); // parseInt конвертирует значение в integer
        //value2 = parseInt(value2);
        //alert('Value1:' + value1 + '\n' + 'Value2:' + value2); //конкотэнация +
        //alert(value1 + value2);
    //});

    //work with inputs
//$('input').on('keyup', function(){   //keyup действие, когда кнопка не нажата или ее нет
    //var value1, value2, value3;
    //value1 = $('#val1').val();
    //value2 = $('.val2').val();
    //value1 = parseInt(value1);
    //value2 = parseInt(value2);

    //value3 = value1 + value2;
    //$('#result').html(value3); // html применяется для "пустых" тэгов, var для инпутов

//});

    //question
    var question = confirm('If you want continue, you mast enter your name!');

    // dynamik
    var name;
    name = prompt('Enter your name!', 'guest');
    $('#result').html('Hello' + ' ' + name + '!'); //присваиваем div то, что ввел пользователь








});
 