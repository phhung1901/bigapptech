$("#registration").submit(function (event) {
    event.preventDefault();
    $('#submit').prop('disabled', true);
    var registration = {
        Name: $('#name').val(),
        Phone: $('#phone').val(),
        Email: $('#email').val(),
        Content: $('#content').val(),
        Subject: $('#subject').val()
    }
    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        url: window.location.origin + '/ericawedding.com' + '/Mailcontactcontroller/addMail_new/',
        dataType: 'JSON',
        data: JSON.stringify(registration),
        success: function (response) {
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#success > .alert-success')
                .append("<strong>Cảm ơn bạn đã quan tâm tới sản phẩm. Chúng tôi sẽ liên hệ tư vấn giúp bạn trong thời gian sớm nhất.</strong>");
            $('#success > .alert-success')
                .append('</div>');
        },
        error: function (response) {
            console.log(response.responseText);
            // Fail message
            $('#success').html("<div class='alert alert-danger'>");
            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#success > .alert-danger').append($("<strong>").text("Xin lỗi " + registration.Name + ", có vẻ như đã có vấn đề với thông tin của bạn. Vui lòng thử lại!"));
            $('#success > .alert-danger').append('</div>');
            //clear all fields
        },
        complete: function () {
            setTimeout(function () {
                $('#success').children().remove();
                $('#submit').prop('disabled', false);
                $("#registration :input").val("");
            }, 10000);
        }
    })
});
$(function () {
    $('#to-top').click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 300);
    });
});