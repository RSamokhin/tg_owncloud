$(function(){
    registerFormDiv = $('<div/>').addClass('registerFormDiv').attr({
        'title':'Register new user'
    });
    validateTips = $('<p/>').addClass('validateTips').html('All form fields are required.').css({
         'border': '1px solid transparent',
         'padding': '0.3em' 
    });
    registerForm = $('<div/>').addClass('registerForm');
    registerFormFieldSet = $('<fieldset/>').addClass('registerFormFieldSet').css({
        'display':'inline-block',
        'min-width': '100px'
    });
    registerFoormEmailP =$('<p/>').addClass('registerFoormEmailP registerFormP');
    registerFoormEmailLabel = $('<label/>').addClass('registerFoormEmailLabel').attr({
        'for':'email'
    }).html('Email').css({
        'position': 'relative',
        'top': '17px'
    });
    registerFoormEmailInput = $('<input/>').addClass('registerFoormEmailInput text ui-widget-content ui-corner-all').attr({
        'type':'text',
        'name':'Email'
    }).css({
       'float': 'right' 
    });
    registerFoormRequestTokenButton = $('<button/>').html('Request token');
    registerFoormTokenP =$('<p/>').addClass('registerFoormTokenP registerFormP');
    registerFoormTokenLabel = $('<label/>').addClass('registerFoormTokenLabel').attr({
        'for':'Token'
    }).html('Token').css({
        'position': 'relative',
        'top': '15px'
    });
    registerFoormTokenInput = $('<input/>').addClass('registerFoormTokenInput text ui-widget-content ui-corner-all').attr({
        'type':'text',
        'name':'Token',
        'disabled':'disabled'
    }).css({
       'float': 'right' 
    });
    registerFoormPwdP =$('<p/>').addClass('registerFoormPwdP registerFormP');
    registerFoormPwdLabel = $('<label/>').addClass('registerFoormPwdLabel').attr({
        'for':'Password'
    }).html('Password').css({
        'position': 'relative',
        'top': '52px'
    });
    registerFoormPwdInput = $('<input/>').addClass('registerFoormPwdInput text ui-widget-content ui-corner-all').attr({
        'type':'password',
        'name':'Password',
        'disabled':'disabled'
    }).css({
       'float': 'right' 
    });;
    
    validateTips.appendTo(registerFormDiv);
    registerForm.appendTo(registerFormDiv);
    registerFormFieldSet.appendTo(registerForm);
    registerFoormEmailP.appendTo(registerFormFieldSet);
    registerFoormEmailLabel.appendTo(registerFoormEmailP);
    registerFoormEmailInput.appendTo(registerFoormEmailP);
    registerFoormRequestTokenButton.appendTo(registerFoormEmailP);
    registerFoormTokenP.appendTo(registerFormFieldSet);
    registerFoormTokenLabel.appendTo(registerFoormTokenP);
    registerFoormTokenInput.appendTo(registerFoormTokenP);
    registerFoormPwdP.appendTo(registerFormFieldSet);
    registerFoormPwdLabel.appendTo(registerFoormPwdP);
    registerFoormPwdInput.appendTo(registerFoormPwdP);
    
    $('.register-button').parent().bind('click',function(){
        registerFormDiv.dialog({
            height: 340,
            width: 400,
            modal: true,
            resizable:false,
            buttons: {
              'Register': register,
              Cancel: function() {
                registerFormDiv.dialog( "close" );
              }
            }
        });
        $(".ui-dialog-buttonpane button").eq(0).button("disable").removeClass("ui-state-default");
    });
    registerFoormRequestTokenButton.bind('click',function(){
        email = $( ".registerFoormEmailInput" );
        allFields = $( [] ).add( email );
        tips = $( ".validateTips" );
        var valid = true;
        valid = valid && checkRegexp( email, emailRegex, "eg. ui@email.com" );
        if ( valid ) {
            url = 'srgScriptRequster.php';
            data = {
                'sname':'srgGenerateNewKeyForUser',
                'sdata':email.val()
            };
            $.ajax({
                url:url,
                data:data,
                success: function (result) {
                        alert( result );
                }
            });
            allFields.removeClass( "ui-state-error" );
            $( ".registerFoormTokenInput" ).removeAttr('disabled').effect('highlight',10000);
            $( ".registerFoormPwdInput" ).removeAttr('disabled').effect('highlight',10000);
            $('.validateTips').text('Enter token from e-mail');
            $(".ui-dialog-buttonpane button").eq(0).button("enable").addClass("ui-state-default");
            email.attr('readonly','readonly');
        }
        return valid;
    });
});
function register(){
    token = $( ".registerFoormTokenInput" );
    email = $( ".registerFoormEmailInput" );
    password = $( ".registerFoormPwdInput" );
    allFields = $( [] ).add( token ).add( email ).add( password );
    tips = $( ".validateTips" );
    var valid = true;
    allFields.removeClass( "ui-state-error" );
    valid = valid && checkLength( token, "Token", 5, 20 );
    valid = valid && checkLength( password, "Password", 5, 16 );
    valid = valid && checkRegexp( token, /^[a-z]([0-9a-z_\s])+$/i, "Token must be requested and sent to your email" );
    valid = valid && checkRegexp( email, emailRegex, "eg. ui@email.com" );
    valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );
    if ( valid ) {
        alert(this);
    }
    return valid;
} 
function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
      setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
      }, 500 );
}
function checkLength( o, n, min, max ) {
      if ( o.val().length > max || o.val().length < min ) {
        o.addClass( "ui-state-error" );
        updateTips( "Length of " + n + " must be between " +
          min + " and " + max + "." );
        return false;
      } else {
        return true;
      }
}
function checkRegexp( o, regexp, n ) {
      if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
      } else {
        return true;
      }
}

emailRegex = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;