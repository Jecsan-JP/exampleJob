import Swal from "sweetalert2";
import { SwalManager } from "../domain/managers/SwalManager";
import { AppModel } from "../domain/models/abstracts/AppModel";


const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success separarBoton',
        cancelButton: 'btn btn-danger separarBoton'
    },
    buttonsStyling: false
});

export class SwalDataManager implements SwalManager {
    showSuccesMessage(title: string, subtitle: string): void {
        Swal.fire(
            title,
            subtitle,
            'success'
        );
    }
    showErrorMessage(title: string, text: string): void {
        Swal.fire({
            icon: 'error',
            title: title,
            text: text,
        });
    }
    showError(error: Error): void {
        Swal.fire(
            error.name ?? "Algo salió mal",
            error.message ?? error.stack ?? "Intenta más tarde",
            'error'
        );
    }

    showSuccessfulAction(item: AppModel): void {
        swalWithBootstrapButtons.fire(
            `¡${item.modelName} eliminado!`,
            'La acción se ha realizado correctamente.',
            'success'
        )
    }

    showCanceledAction(item: AppModel): void {
        swalWithBootstrapButtons.fire(
            '¡Acción cancelada!',
            `${item.modelName} seguro.`,
            'error'
        )
    }

    async deleteItem(
        item: AppModel,
        successfulAction: () => void
    ): Promise<any> {
        return swalWithBootstrapButtons.fire({
            title: `¿Estas seguro que deseas eliminar el ${item.modelName}?`,
            text: "Ésta acción es irreversible.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: `Si, eliminar ${item.modelName}!`,
            cancelButtonText: '¡No, cancelar acción!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                successfulAction();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                this.showCanceledAction(item);
            }
        }).catch(error => {
            this.showError(error);
        });
    }

    async requestConfirmationDeleteDocument(
        successfulAction: () => void
    ): Promise<any> {
        return swalWithBootstrapButtons.fire({
            title: `¿Está seguro que deseas eliminar el documento?`,
            text: "Ésta acción es irreversible.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: `Si, eliminar.`,
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                // swalWithBootstrapButtons.fire(
                //     `¡Documento eliminado!`,
                //     'La acción se ha realizado correctamente.',
                //     'success'
                // );
                successfulAction();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.close();
            }
        }).catch(error => {
            this.showError(error);
        });
    }

    async requestConfirmationDeleteUserAsset(
        successfulAction: () => void
    ): Promise<any> {
        return swalWithBootstrapButtons.fire({
            title: `¿Está seguro que deseas eliminar el usuario?`,
            text: "Ésta acción es irreversible.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: `Si, eliminar.`,
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                successfulAction();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.close();
            }
        }).catch(error => {
            this.showError(error);
        });
    }


}