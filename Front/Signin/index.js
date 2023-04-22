function validarRegistro() {
    // Obtener valores de los campos de entrada
    var correo = document.getElementById("emailForm").value;
    var password = document.getElementById("passwordForm").value;
    var confirm_password = document.getElementById("confirmPasswordForm").value;

    // Validar campo de correo
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        alert("Por favor ingresa un correo electrónico válido");
        return false;
    }

    // Comparar contraseñas
    if (password != confirm_password) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    // Si todo está bien, enviar formulario
    alert("¡Registro exitoso!");
    return true;
}
