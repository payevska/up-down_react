<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$errorEmpty = false;
	$errorEmail = false;

	if (empty($name) || empty($email) || empty($message)) {
		echo "<span class='form-error'>Fill in all fields!</span>";
		$errorEmpty = true;
	} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo "<span class='form-error'>Write a valid e-mail address!</span>";
		$errorEmail = true;
	} else {
		$headers = 'From: '.$name."\r\n".
		'Reply-To: '.$email."\r\n" .
		'X-Mailer: PHP/' . phpversion();
		@mail(/* 'sales@und.com.ua' */ 'petrikjul@gmail.com', 'UND: Вопрос из формы', $message, $headers);
	}
} else {
	echo "There was an error!";
}

?>

<script>
	$('#mail-name, #mail-email,#mail-message').removeClass('input-error');
	var errorEmpty = "<?php echo $errorEmpty; ?>";
	var errorEmail = "<?php echo $errorEmail; ?>";

	if (errorEmpty == true) {
		$('#mail-name, #mail-email,#mail-message').addClass('input-error');
	}
	if (errorEmail == true) {
		$('#mail-email').addClass('input-error');
	}
	if (errorEmpty == false && errorEmail == false) {
		$('#mail-name, #mail-email,#mail-message').val('');
	}
</script>