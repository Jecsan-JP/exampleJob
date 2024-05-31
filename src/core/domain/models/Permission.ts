export class Permission {

    id_permission?: string;
    position_name?: string; //Nombre puesto
    module_name?: string; //Nombre del modulo con la tabla de módulos
    prof_access?: number; // 1 (con permiso) o 0 (sin permiso)

    constructor({
        id_permission = undefined,
        position_name = undefined,
        module_name = undefined,
        prof_access = undefined
    }: any) {
        this.id_permission = id_permission;
        this.position_name = position_name;
        this.module_name = module_name;
        this.prof_access = prof_access;
    }
}