import { AppModel } from "../models/abstracts/AppModel";

export interface SwalManager {
    showSuccesMessage(title: string, subtitle: string): void;
    showErrorMessage(title: string, text: string): void;
    showError(error: Error): void;
    deleteItem: (
        item: AppModel,
        successfulAction: () => void
    ) => Promise<any>;
    requestConfirmationDeleteDocument: (
        successfulAction: () => void
    ) => Promise<any>;

    requestConfirmationDeleteUserAsset: (
        successfulAction: () => void
    ) => Promise<any>;
}