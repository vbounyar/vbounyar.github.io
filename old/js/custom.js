/*  Custom js here */
$(document).ready(function() {
    // Smooth scrolling
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // Contact
    var $contactForm = $('#contact-form');
    var $email = $("#email");
    var $name = $("#name");
    var $subject = $("#subject");
    var $message = $("#message");
    var $sendBtn = $("#send-btn");
    var $clearBtn = $("#clear-btn");
    var $contactStatus = $("#contact-status");

    var clearForm = function() {
      $email.val("");
      $subject.val("");
      $message.val("");
      $name.val("");
    }

    $clearBtn.on("click", clearForm);

    $contactForm.submit(function(event) {

			         event.preventDefault();

							 //  Get the values from the inputs.
							 var values = $(this).serialize();

							 // Request a post
			         ajaxRequest = $.ajax({
			             type: "post",
			             url: "contactProcess.php",
			             data: values
			         });

							 // If request sucessfull, show confirmation and clear the forms.


							 ajaxRequest.done(function (response, textStatus, jqXHR) {
                 clearForm();
								 $contactStatus.removeClass("hidden");
							 });


							 // If request fail then alert message saying so.
							 ajaxRequest.fail(function () {
								  $contactStatus.html("<strong>Failed!</strong> <br/>Something went wrong with the send. Please email via <a href='mailto: vbounyar@gmail.com' class='alert-link'>vbounyar@gmail.com</a>.");
                  $contactStatus.removeClass("alert-success");
                  $contactStatus.addClass("alert-danger");
                  $contactStatus.removeClass("hidden");

							 });

			});

      var changeBackgroundColor = function(el,color,opacity) {
        $(el).css("background-color",color);
        $(el).css("opacity",opacity)
      };

      // Mouse over animation
      var $wells = $(".well.well-lg");
      $wells.on("mouseover",
        function() {
          changeBackgroundColor(this,"green","0.5");
      });

      $wells.on("mouseleave",
        function() {
          changeBackgroundColor(this,"#f5f5f5","1");
      });

});
