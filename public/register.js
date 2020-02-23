// $(document).ready(function(){
//     $("#register_ajax").submit(
//         function(){
//             var name = $("#input_username").val();
// 		    var surname = $("#input_userpostname").val();
// 		    var spec = $("#input_speciality").val();
// 		    var email = $("#input_email").val();
		    
// 		    var data = {
// 					'firstname': name,
// 					'lastname': surname,
// 					'middlename': '',
// 					'city': '',
// 					'spec': spec,
// 					'email': email
// 				};
				
// 			var url = 'https://api2.doctoronboard.ru:22222';
// 			$.get(url,data);
// 			$("#modal").modal('show');
// 		    $('input').val(''); $('select').val('');
			
//         });
// });
	

$(document).ready(function(){
	$("#register_ajax").submit(
		function(){
		    var name = $("#input_username").val();
		    var surname = $("#input_userpostname").val();
		    var spec = $("#input_speciality").val();
		    var email = $("#input_email").val();

			$.ajax({

				// url : '/mail.php',
				url: 'https://api2.doctoronboard.ru:22222/',
				crossDomain: true,
				dataType: 'script',
				// url: '/reg.php',
				type : 'GET',
				data : {
					'firstname': name,
					'lastname': surname,
					'middlename': 'none',
					'city': 'none',
					'spec': spec,
					'email': email
				},
				success: function(){
				    $("#modal").modal('show');
				    $('input').val(''); $('select').val('');
				},
				error: function(){
                    alert('error!');
				},
				// success: function(){$("#modal").modal('show'); $('input').val(''); $('select').val('');},
			});

			return false;

		});
});

$(document).ready(function(){
    $('#button-start').click(function(){
            var form = $(register_ajax);
            form.validate();
            if (form.valid()){
                $("#register_ajax").submit();
            };
            
		});
});


$.extend( $.validator.messages, {
	required: "Это поле необходимо заполнить.",
	remote: "Пожалуйста, введите правильное значение.",
	email: "Пожалуйста, введите корректный адрес электронной почты.",
	url: "Пожалуйста, введите корректный URL.",
	date: "Пожалуйста, введите корректную дату.",
	dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
	number: "Пожалуйста, введите число.",
	digits: "Пожалуйста, вводите только цифры.",
	creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
	equalTo: "Пожалуйста, введите такое же значение ещё раз.",
	extension: "Пожалуйста, выберите файл с правильным расширением.",
	maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
	minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
	rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
	range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
	max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
	min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
} );