$(document).ready(function () {

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1100, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true
    });

    $(function () {
        $(".typed").typed({
            strings: ["code with accessibility in mind.",
            "keep things organized.",
            "am efficient and effective.",
            "am friendly and positive."],
            stringsElement: null,
            // typing speed
            typeSpeed: 55,
            // time before typing starts
            startDelay: 400,
            // backspacing speed
            backSpeed: 25,
            // time before backspacing
            backDelay: 600,
            // loop
            loop: true,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function () { },
            // starting callback function before each string
            preStringTyped: function () { },
            //callback for every typed string
            onStringTyped: function () { },
            // callback for reset
            resetCallback: function () { }
        });
    });

    new WOW().init();

    $(".accentLine").css({
        "width":"500px"
    });

});