$(document).ready(function () {
    $('#signin_form').submit(function (e) {
        e.preventDefault();
        var email = $.trim($('#login-username').val());
        var password = $.trim($('#login-password').val());
        if ( email.length == 0){
           alert('email required!');
        }
        else if (password.length == 0){
            alert('password required!');
        }
        else{
           var form_data =  $('#signin_form').serialize();
            $.ajax({
                url:'users/request_handler/login',
                type:'post',
                dataType:'json',
                data:form_data,
                success:function (response) {
                    console.log(response);
                    if (response.status == 200) {

                        location.href = 'dashboard';
                    }
                    else if(response.status == 401) {
                        $('.message').text("username and password does not match.");
                        $('div').removeClass('hidden');
                    }
                }
            });
        }
    });

});

