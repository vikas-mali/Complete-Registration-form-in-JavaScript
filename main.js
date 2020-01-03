invalid_field = 0;
$(document).on('blur', '.fname,.lname', function() {
    var content = $(this).val();
    var error = "";
    validName = content.match(/^[a-zA-Z\s]+$/);
    var valid = true;
    if (content.length == 0) {
        valid = false;
        invalid_field++;
        error = "Enter  Name";
    } else if (content != validName) {
        valid = false;
        invalid_field++;
        error = "Enter Valid Name";
    } else {

    }
    $(this).closest(".register-form").siblings(".validResult").find(".error").html(error);

    if (valid) {
        $(this).css("border", "");
        $(this).attr("data-validation", true);
        $(this).closest(".register-form").siblings(".validResult").find(".error").css("color", "green");
    } else {
        $(this).css("border", "1px solid red");
        $(this).attr("data-validation", false);
        $(this).closest(".register-form").siblings(".validResult").find(".error").css("color", "red");

    }
});
$(document).on("blur", ".uname", function() {
    var content = $(this).val();
    var error = "";
    validName = content.match(/^[a-z0-9_-]{3,15}$/);
    var valid = true;
    if (content.length == 0) {
        valid = false;
        invalid_field++;
        error = "Enter User Name";
    } else if (content != validName) {
        valid = false;
        invalid_field++;
        error = "plese enter Username must be 3 to 15 character";
    } else {
        // No error
    }

    $(this).closest(".register-form").siblings(".validResult").find(".error").html(error);

    if (valid) {
        $(this).css("border", "");
        $(this).attr("data-validation", true);
        $(this).closest(".register-form").siblings(".validResult").find(".error").css("color", "green");

    } else {
        $(this).css("border", "1px solid red")
        $(this).attr("data-validation", false);
        $(this).closest(".register-form").siblings(".validResult").find(".error").css("color", "red");
    }
});

$(document).on("blur", ".address", function() {
    var content = $(this).val();
    var error = "";
    var validadd = content.match(/^[a-z0-9_-]{3,25}$/);
    var valid = true;
    if (content.length == 0) {
        valid = false;
        invalid_field++;
        error = "Plese Enter Adderss";
    } else if (content != validadd) {
        valid = false;
        invalid_field++;
        error = "Plese enter only character and Number and maximum char 25";
    } else {
        // No error
    }
    $(this).closest(".register-form").siblings(".validResult").find(".error").html(error);
    if (valid) {
        $(this).css("border", "");
        $(this).attr("data-validation", true);
        $(this).closest(".register-form").siblings(".validResult").find(".error").css("color", "green");

    } else {
        $(this).css("border", "1px solid red");
        $(this).attr("data-validation", false);
        $(this).closest(".register-form").siblings(".validResult").find(".error").css("color", "red");
    }
});

$(document).on("blur", ".email", function() {
    var content = $(this).val();
    var validemail = content.match(/[^0-9A-Za-z_@\. ]/g);
    var valid = true;
    if (content.length == 0) {
        valid = false;
        invalid_field++;
        error = "Plese Enter Email";
    } else if (validemail != null) {
        valid = false;
        invalid_field++;
        error = "Enter only Alpgabets, digits, @ and underscore";

    } else if (content.count("@") != 1) {
        valid = false;
        invalid_fields_on_page++;
        message = "Enter valid email";
    } else {
        // No error
    }
    $(this).closest(".register-form").siblings(".validResult").find(".error").html(error);
    if (valid) {
        $(this).css("border", "");
        $(this).attr("data-validation", true);
        $(this).closest(".register-form").siblings(".validResult").find(".error").css("color", "green");

    } else {
        $(this).css("border", "1px solid red");
        $(this).attr("data-validation", false);
        $(this).closest(".register-form").siblings(".validResult").find(".error").css("color", "red");
    }
});
$(document).on("blur", ".pass", function() {
    var content = $(this).val();
    var message = "";
    /*Check for punctuation. See if there is a better way*/
    validPass = content.match(/[^0-9A-Za-z_ ]/g);
    var valid = true;

    if (content.length == 0) {
        valid = false;
        invalid_fields_on_page++;
        error = "Enter Field";
    } else if (validPass != null) {
        valid = false;
        invalid_fields_on_page++;
        error = "Enter only Alpgabets, digits and underscore";
    } else if (content.length < 8) {
        valid = false;
        invalid_fields_on_page++;
        error = "Password should have atleast 8 characters";
    } else {
        // No errors!
    }

    $(this).closest(".register-form").siblings(".validResult").find(".error").html(error);

    if (valid) {
        $(this).css("border", "");
        $(this).attr("data-validation", true);
        $(this).closest(".register-form").siblings(".validResult").find(".error").css("color", "green");

    } else {
        $(this).css("border", "1px solid red");
        $(this).attr("data-validation", false);
        $(this).closest(".register-form").siblings(".validResult").find(".error").css("color", "red");
    }
});

$(document).on("blur", ".conpass", function() {
    var content = $(this).val();
    var password = $(this)
        .parent()
        .siblings()
        .find(".conpass")
        .val();
    var error = "";
    /*Check for punctuation. See if there is a better way*/
    invalidArray = content.match(/[^0-9A-Za-z_ ]/g);
    var valid = true;

    /* First, chech if the password entered in the password field is correct*/
    if (
        $(this)
        .parent()
        .siblings()
        .find(".conpass")
        .attr("data-validation") != "true"
    ) {
        valid = false;
        invalid_fields_on_page++;
        error = "First enter a Correct Password";
    } else if (content.length == 0) {
        valid = false;
        invalid_fields_on_page++;
        error = "Enter field ";
    } else if (password.length == 0) {
        /*If nothing is entered in the password field (redundant)*/
        valid = false;
        invalid_fields_on_page++;
        error = "Enter Password First ";
    } else if (password != content) {
        valid = false;
        invalid_fields_on_page++;
        error = "Passwords Dont match";
    } else {
        // No errors!
    }

    $(this).closest(".register-form").siblings(".validResult").find(".error").html(error);

    if (valid) {
        $(this).css("border", "");
        $(this).attr("data-validation", true);
        $(this).closest(".register-form").siblings(".validResult").find(".error").css("color", "green");

    } else {
        $(this).css("border", "1px solid red");
        $(this).attr("data-validation", false);
        $(this).closest(".register-form").siblings(".validResult").find(".error").css("color", "red");
    }
});

$(document).on("click", ".email", function() {
    invalid_fields_on_page = 0;
    if (
        $(this)
        .siblings()
        .find(".uname")
        .is(":hidden")
    ) {
        //$(this).siblings().find('.email-validation').trigger('blur');
        $(this)
            .siblings()
            .find(".fname")
            .trigger("blur");
    } else {
        $(this)
            .siblings()
            .find(".uname")
            .trigger("blur");
    }

    //$(this).siblings().find('.alphanum-validation').trigger('blur');
    $(this)
        .siblings()
        .find(".pass")
        .trigger("blur");
    $(this)
        .siblings()
        .find(".conpass")
        .trigger("blur");
    if (invalid_fields_on_page > 0) return false;
    else return true;
});