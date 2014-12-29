$(function(){
    registerFormDiv = $('<div/>').addClass('registerFormDiv').attr({
        'title':'Register new user'
    });
    validateTips = $('<p/>').addClass('validateTips').html('All form fields are required.');
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
        'name':'email'
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
        'name':'token'
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
        'name':'password'
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
            height: 330,
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
    });
});
function register(){
    alert(this);
} 