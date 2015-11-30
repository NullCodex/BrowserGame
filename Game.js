(function() {

    var playerInfo = {
        level: 1,
        score: 0,
        life: 50
    };

    var game_variables = {
        total_words: 0,
        current_word_id: 0,
        words_created: 0,
        windowHeight: screen.availHeight,
        windowWidth: screen.width,
        arrayCounter: 0,
        travelSpeed: 10
    };

    function move_down() {
        var spanGroup = document.getElementsByTagName("span");

        for (var i = 0; i < spanGroup.length; i++) {
            var top_position_with_px = span_group[i].style.top;
            var top_position = top_position_with_px.slice(0, top_position_with_px.length - 2);
            var top_position_int = parseInt(top_position);
            if (top_position_int + 10 >= 500) {
                var elem = document.getElementById(i.toString());
                elem.parentNode.removeChild(elem);
                game_variables.current_word++;
            }
            span_group[i].style.top = top_position_int + pixel_travel + 'px';
        }

    }

    function level_up() {
        var started = new date();
        var elapsed = new date() - started;

    }

    function rand_word(gameLevel) {
        var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var string = "";
        for (var i = 0; i < gameLevel; i++) {
            string += letters[Math.floor((Math.random() * 26))];
        }
        return string;

    }

    function New_word() {



        var left_position_int = rand_position();
        var temp = document.createElement('span');
        temp.id = game_variables.words_created.toString();
        temp.innerHTML = shuffledArray[game_variables.arrayCounter];
        game_variables.arrayCounter++;
        //temp.style.left = left_position_string + "px";
        //console.log(left_position_int);
        temp.style.left = left_position_int + "px";
        temp.style.top = "10px";
        document.body.appendChild(temp);
        player_Info.level++;
        game_variables.words_created++;

        if (game_variables.current_word_id == 0) {
            game_variables.current_word = temp.innerText || here.textContent;
        }
    }

    function deleteElement() {
        var span_group = document.getElementsByTagName("span");
        il = span_group.length;
        for (var i = 0; i < il; i++) {
            //alert(span_group[i].style.top);
            //var elem = document.getElementById(i.toString());
            var top_position_with_px = span_group[i].style.top;
            var top_position = top_position_with_px.slice(0, top_position_with_px.length - 2);
            var top_position_int = parseInt(top_position);

            if (top_position_int + 10 >= 500) {
                //span_group[i].style.top = top_position_int + pixel_travel + 'px';
                //console.log("here");
                //console.log(i);
                //console.log(i);
                var elem = span_group[i];
                // use jQuery
                elem.parentNode.removeChild(elem);
                game_variables.current_word_id++;
                player_Info.life--;
                //move_down();
                //$(i.toString()).remove();
            }


        }


        /*
    var r = confirm("Press a button");
    if (r == true) {
    //document.getElementById("test").remove();
    var elem = document.getElementById("1");
    elem.parentNode.removeChild(elem);
    } else {
        document.getElementById("test").innerHTML = "Not";
}
    */

        /*
        function deleteElement( element_id)
        {
            var element = element_id;
            element.parentNode.removeChild(element);
            game_variables.current_word++;
        }

        */
    }


    function Init() {

        // Ask the user if they are ready
        var answer = prompt("Are you ready");

        if (answer.toLowerCase() === "yes") {
            var shuffledArray = shuffleWords(arr);
            setInterval(function() {
                move_down()
            }, 1000);
            document.onkeypress = function(event) {
                // var current_word = document.getElementById(game_variable.current_word.toString).innerText || document.getElementById(game_variable.current_word.toString).textContent
                var key_code = event.keyCode;
                var key_character = String.fromCharCode(event.keyCode);
                output += key_character;
                check++;
                if (output != correct && check == 5) {
                    check = 0;
                    output = "";
                } else if (output == correct) {
                    alert("Game over!");
                }
            }



        }
    }

    $(Init)
})()