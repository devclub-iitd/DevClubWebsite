// script for typing animation
(function() {
    $(".verb").typed({
        //place space before strings otherwise doesn't render with html tags properly
        strings: [' <span class="question">question</span>', ' <span class="make">make</span>', ' <span class="code">code</span>', ' <span class="design">design</span>', ' <span class="invent">invent</span>'],
        typeSpeed: 80,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: true,
    });
})();
