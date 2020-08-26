$(document).ready(function(e){

    $("#reg-form").submit(function(event){
        let $password = $("#password");
        let $confirm = $("#confirmPassword");
        let $error = $("#confirm_error");

        if($password.val() === $confirm.val())
        {
            return true;
        }
        else
        {
            $error.text("Error : Password not match!!!!");
            event.preventDefault();
        }
    });

});

function preview(event){
    const input = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(){
        const result = reader.result;
        const image = document.getElementById('img');
        wip.style.display="none";
        image.src = result;
    }
    reader.readAsDataURL(input);
}


const responsive ={
    0:{
        items:1
    },

    360:{
        items:1
    },

    411:{
        items:1
    },

    500:{
        items:2
    },
    960:{
        items:3
    }

};

$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // Click event on toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav:true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // click to move up
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    });

    //  AOS on scroll
    AOS.init();
});
