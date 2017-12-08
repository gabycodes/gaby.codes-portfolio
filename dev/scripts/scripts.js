$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true
});

$(function () {
    $(".typed").typed({
        strings: ["is friendly and positive.", 
        "codes with accessibility in mind.",
        "keeps things organized", 
        "is efficient and effective."],
        stringsElement: null,
        // typing speed
        typeSpeed: 35,
        // time before typing starts
        startDelay: 1900,
        // backspacing speed
        backSpeed: 30,
        // time before backspacing
        backDelay: 600,
        // loop
        loop: false,
        // false = infinite
        loopCount: 5,
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