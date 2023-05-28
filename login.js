$.validator.addMethod("validarPassword", function(){
    var contra = document.getElementById('password').value.trim();
    var valor = '123456';

    if (contra === valor){
        return true; 
    } else {
        return false; 
    }
}, "La contraseña es incorrecta.");


$.validator.addMethod("validarEmail", function(){
    var correo = document.getElementById('email').value;
    var correoValido = 'tup2022@tup.com.ar';

    if (correo === correoValido){
        return true; 
    } else {
        return false;
    }
}, "El email es incorrecto.");


$("#validar").validate({
    rules: {
        email: {
            required: true,
            email: true,
            validarEmail: true
        },
        password: {
            required: true,
            validarPassword: true
        }
    },
    messages:{
        email: {
            required: "Debe ingresar el email",
            email: "Debe ser del formato del email",
            
        },
        password: {
            required: "Debe ingresar la contraseña",
            
        }
    },
    
    
    submitHandler: function() {
        Swal.fire({
            icon: 'success',
            text: 'Datos ingresados correctamente'
        })
            ingresarSistema();
    }

   });


function ingresarSistema(){
   window.open('pilotoNuevo.html')
}


