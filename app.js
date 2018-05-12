function submitFormlogo() {
	var qoutation = $("#contact-logo #qoutation").val();
	var name = $("#contact-logo #name").val();
	var email = $("#contact-logo #email").val();
	var phone = $("#contact-logo #phone").val();
	var countrycode = $("#contact-logo #countrycode option:selected").val();
	var budget = $("#contact-logo #budgetcon textarea").text();

	$.ajax({
		type: "POST",
		url: "mailer.php",
		data: {
			"qoutation": qoutation,
			"name": name,
			"email": email,
			"countrycode": countrycode,
			"budget": budget,
			"phone": phone
		},
		//        data: "qoutation=" + qoutation + "&name=" + name + "&email=" + email + "&countrycode=" + countrycode + "&budget=" + budget + "&phone=" + phone,
		success: function (text) {
			if (text == "success") {}
		}
	});
}

function submitFormweb() {

	var qoutation = $("#contact-web #qoutation").val();
	var name = $("#contact-web #name").val();
	var email = $("#contact-web #email").val();
	var phone = $("#contact-web #phone").val();
	var countrycode = $("#contact-web #countrycode option:selected").val();
	var budget = $("#contact-web #budgetcon textarea").text();

	$.ajax({
		type: "POST",
		url: "mailer.php",
		data: "qoutation=" + qoutation + "&name=" + name + "&email=" + email + "&countrycode=" + countrycode + "&budget=" + budget + "&phone=" + phone,
		success: function (text) {
			if (text == "success") {
				$("#msgSubmit").addClass("show");
			}
		}
	});
}

function submitFormapp() {

	var qoutation = $("#contact-app #qoutation").val();
	var name = $("#contact-app #name").val();
	var email = $("#contact-app #email").val();
	var phone = $("#contact-app #phone").val();
	var countrycode = $("#contact-app #countrycode option:selected").val();
	var budget = $("#contact-app #budgetcon textarea").text();

	$.ajax({
		type: "POST",
		url: "mailer.php",
		data: "qoutation=" + qoutation + "&name=" + name + "&email=" + email + "&countrycode=" + countrycode + "&budget=" + budget + "&phone=" + phone,
		success: function (text) {
			if (text == "success") {
				$("#msgSubmit").addClass("show");
			}
		}
	});
}



function submitFomforMSG() {
	var qoutation = $("#contact-msg #qoutation").val();
	var name = $("#contact-msg #name").val();
	var email = $("#contact-msg #email").val();
	var countrycode = $("#contact-msg #countrycode option:selected").val();
	var phone = $("#contact-msg #phone").val();
	var subject = $("#contact-msg #subject").val();
	var message = $("#contact-msg #message").val();

	$.ajax({
		type: "POST",
		url: "mailer.php",
		data: "qoutation=" + qoutation + "&name=" + name + "&email=" + email + "&countrycode=" + countrycode + "&phone=" + phone + "&subject=" + subject + "&message=" + message,
		success: function (text) {
			if (text == "success") {
				$("#msgSubmitcontact").addClass("show");
			}
		}
	});
}
