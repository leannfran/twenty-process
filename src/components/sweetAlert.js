import Swal from 'sweetalert2';

export const showDefaultAlert = (text,icon) => {
  Swal.fire({
    text: text,
    icon: icon,
    confirmButtonColor: '#235F5B',
    confirmButtonText: 'Aceptar',
  });
};

export const customConfirm = async (message) => {
  return Swal.fire({
    text: message,
    icon: 'question',
    confirmButtonColor: '#47A29B',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
  }).then((result) => {
    return result.isConfirmed;
  });
};