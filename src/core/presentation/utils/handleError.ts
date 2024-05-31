import Swal from "sweetalert2";

export function handleError(error:Error){
  Swal.fire(
    "Error",
    error.message,
    'error'
  );
}