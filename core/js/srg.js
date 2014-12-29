$(function(){
    registerFormDiv = $('<div/>').addClass('registerFormDiv').attr({
        'title':'Register new user'
    });
    validateTips = $('<p/>').addClass('validateTips').html('All form fields are required.');
    registerForm = $('<form/>').addClass('registerForm');
    registerFormFieldSet = $('<fieldset/>').addClass('registerFormFieldSet');
    registerFoormEmailLabel = $('<label/>').addClass('registerFoormEmailLabel').attr({
        'for':'email'
    }).html('Email');
    registerFoormEmailInput = $('<input/>').addClass('registerFoormEmailInput text ui-widget-content ui-corner-all').attr({
        'type':'text',
        'name':'email'
    });
    
    
    validateTips.appendTo(registerFormDiv);
    registerForm.appendTo(registerFormDiv);
    registerFormFieldSet.appendTo(registerForm);
    registerFoormEmailLabel.appendTo(registerFormFieldSet);
    registerFoormEmailInput.appendTo(registerFormFieldSet);
    
    $('.register-button').parent().bind('click',function(){
        registerFormDiv.dialog();
    });
});