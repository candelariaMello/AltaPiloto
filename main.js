function Validar(){
    $(document).ready(function(){
        $('#form').validate({
            rules:{
                Nombre:{
                    required:true
                },
                Apellido:{
                    required:true
                },
                CantHoras:{
                    required:true,
                    digits:true
                },
                Sexo:{
                    required:true
                },
                Nacionalidad:{
                    required:true
                }
            },
            messages:{
                Nombre:{
                    required:"Ingrese el nombre del piloto"
                },
                Apellido:{
                    required:"Ingrese el apellido del piloto"
                },
                CantHoras:{
                    required:"Ingrese la cantidad de horas del piloto",
                    digits:"La cantidad de horas debe ser en valor numérico"
                },
                Sexo:{
                    required:"Seleccione el sexo del piloto"
                },
                Nacionalidad:{
                    required:"Seleccione su nacionalidad"
                }
            }
        });
        if($("#form").valid()){
            Swal.fire({
                icon:'success',
                text:'Piloto registrado'
            });
        }
        else{
            Swal.fire({
                icon:'error',
                text:'Formulario inválido, pruebe de nuevo'
            });
        }
    });
}