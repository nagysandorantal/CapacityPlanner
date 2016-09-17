(function () {

    "use strict";

    function Animal( voice ) {
        this.voice = voice || 'word';

        this.speak = function () {
            console.log( this.voice );
        };
    }

    function Cat( name, color ) {

        Animal.call( this, 'miaw..' );

        this.name = name;
        this.color = color;
    }

    var c = new Cat( 'Fluffy', 'Red' );
    c.speak();

    console.log( c.name + ' ' + c.color );


    $( document ).ready( function () {

        $("#menuId").className = "light";
    });

    /**
     * Add class to menuId
     */
    function extracted( ) {
        $( "#menuId" )
            .addClass( "dark" );
    }


    $("#menuId").on( "click", function(){

        extracted();
        }

    );

})();