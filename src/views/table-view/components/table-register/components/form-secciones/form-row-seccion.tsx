import React from "react";
import { TableCell, TextField, MenuItem } from "@material-ui/core";
import { SelectReactHookForm } from "components";
import { estadosProcesamiento } from 'views/table-view/components/table-register/estados';

export interface FormRowSeccionProps {
    seccion: {
        id: { name: string, defaultValue: string, error: boolean, errorText?: string },
        nombre: { name: string, defaultValue: string, error: boolean, errorText?: string },
        estado: { name: string, defaultValue?: number, error: boolean, errorText?: string }
    },
    register: any;
    control: any;
}

export const FormRowSeccion = (props: FormRowSeccionProps) => {
    const { seccion, register, control } = props;
    return <>
        <TableCell>
            <TextField
                name={seccion.id.name}
                inputRef={register}
                fullWidth
                defaultValue={seccion.id.defaultValue}
                error={seccion.id.error}
                helperText={seccion.id.errorText}
            />
        </TableCell>
        <TableCell>
            <TextField
                name={seccion.nombre.name}
                inputRef={register}
                fullWidth
                defaultValue={seccion.nombre.defaultValue}
                error={seccion.nombre.error}
                helperText={seccion.nombre.errorText}
            />
        </TableCell>
        <TableCell>
            <SelectReactHookForm
                label="estado-label"
                name={seccion.estado.name}
                defaultValue={seccion.estado.defaultValue}
                control={control}
                error={seccion.estado.error}
                errorMessage={seccion.estado.errorText}
            >
                <MenuItem value="">
                    <em>Seleccione</em>
                </MenuItem>
                {estadosProcesamiento.map((estado, index) => <MenuItem key={index} value={estado.id}>{estado.nombre}</MenuItem>)}
            </SelectReactHookForm>
        </TableCell>
    </>;
}