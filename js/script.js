$(".menu-toggle").click(function () {

        $(".navbar").toggleClass("active");

    });


$(document).ready(function (){

$(".carousel").slick({
    autoplay : true,
    autoplaySpeed : 2000,
});
});

$(document).ready(function () {

    $(".why-card").click(function () {

        $(".why-card").removeClass("selected");

        $(this).addClass("selected");

    });

});

$(document).ready(function () {

    lightbox.option({
        'resizeDuration': 300,
        'wrapAround': true,
        'fadeDuration': 300,
        'imageFadeDuration': 300
    });


    /* =====================================
       SHOP NOW BUTTON
    ===================================== */

    $('.bridal-card-info .btn').on('click', function () {

        // Contact page par normal link ke through jayega
        // Ye sirf button click ko handle kar raha hai

    });


    /* =====================================
       VIDEO
    ===================================== */

    $('.featured-video video').on('play', function () {

        console.log("Bridal video started");

    });

});

 const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
           

            let nameError= document.getElementById("nameError")
            let emailError= document.getElementById("emailError")
            let messageError= document.getElementById("messageError")
            let response = document.getElementById("response")

              nameError.innerHTML="";
              emailError.innerHTML="";
              messageError.innerHTML="";
              response.innerHTML="";

            
            let isValid = true;
            if (name === "") {
                nameError.innerHTML = "Enter Your Name";
                response.style.color = "red";
               isValid = false;
            } 
         else if(email ===""){
           emailError.innerHTML = "Please fill out this field";
                response.style.color = "red";
                isValid = false;
          }
           else if(message ===""){

            messageError.innerHTML = "Please fill out this field";
                response.style.color = "red";
                isValid = false;
          }
            else{
                response.innerHTML = "Message sent successfully!";
                response.style.color = "green";
                contactForm.reset();
            }
        });
    }

    $("#hoursButton").click(function () {

    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    // Sunday closed
    if (day === 0) {
        alert("We are Closed today.");
        return;
    }

    // Monday to Saturday: 10 AM to 8 PM
    if (hour >= 10 && hour < 20) {
        alert("We are Available! Our boutique is currently open.");
    } else {
        alert("We are Closed. Our opening hours are 10 AM - 8 PM.");
    }

});

/* =====================================================
   FOOTER INFORMATION POPUP
   ===================================================== */

$(".footer-info").click(function (e) {

    e.preventDefault();

    const infoType = $(this).data("info");

    if (infoType === "shipping") {

        $("#popupTitle").text("Shipping & Delivery");

        $("#popupText").text(
            "We carefully pack every order and arrange delivery within Karachi and other cities. Delivery time may vary depending on the location."
        );

    }

    else if (infoType === "returns") {

        $("#popupTitle").text("Returns & Exchange");

        $("#popupText").text(
            "Items can be exchanged according to our boutique policy. Please contact us for exchange details and eligibility."
        );

    }

    else if (infoType === "size") {

        $("#popupTitle").text("Size Guide");

        $("#popupText").text(
            "Please contact us with your measurements before placing an order so we can help you choose the appropriate size."
        );

    }

    $("#footerPopup").css("display", "flex");
});


/* Close Popup */

$("#closePopup").click(function () {

    $("#footerPopup").hide();

});


/* Close popup when clicking outside */

$("#footerPopup").click(function (e) {

    if (e.target === this) {
        $("#footerPopup").hide();
    }

});

    const faqQuestions = document.querySelectorAll(".faq-question");
const faqAnswers = document.querySelectorAll(".faq-answer");

// Page load par sab answers close
faqAnswers.forEach(function(answer) {
    answer.style.display = "none";
});

// Sirf pehla answer open
if (faqAnswers.length > 0) {
    faqAnswers[0].style.display = "block";
}

faqQuestions.forEach(function(question, index) {

    question.addEventListener("click", function() {

        const answer = this.nextElementSibling;

        // Baqi sab close
        faqAnswers.forEach(function(item) {
            if (item !== answer) {
                item.style.display = "none";
            }
        });

        // Current FAQ open/close
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});


    $(document).ready(function () {



    /* ==============================
       READ MORE
    ============================== */

    $(".product-card .btn:not(.add-cart)").click(function () {

        alert("Product details are available. Please contact us for more information.");

    });


    /* ==============================
       FOOTER POPUP
    ============================== */

    $(".footer-info").click(function (e) {

        e.preventDefault();

        let info = $(this).data("info");

        if (info === "shipping") {

            $("#popupTitle").text("Shipping & Delivery");

            $("#popupText").text(
                "We provide reliable delivery services. Delivery time and charges may vary according to the location."
            );

        }

        else if (info === "returns") {

            $("#popupTitle").text("Returns & Exchange");

            $("#popupText").text(
                "For returns or exchanges, please contact our customer care team through the Contact Us page."
            );

        }

        else if (info === "size") {

            $("#popupTitle").text("Size Guide");

            $("#popupText").text(
                "Please contact our team for assistance with selecting the appropriate size for stitched dresses."
            );

        }

        $("#footerPopup").fadeIn();

    });


    $("#closePopup").click(function () {

        $("#footerPopup").fadeOut();

    });


    $("#footerPopup").click(function (e) {

        if (e.target === this) {

            $(this).fadeOut();

        }

    });
    });


    