import { Grid, MenuItem, TextField } from '@material-ui/core';
import { SelectReactHookForm } from 'components';
import { Grado } from 'models/grado';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { estadosProcesamiento } from 'views/table-view/components/table-register/estados';
import { IGradoSchema } from 'schemas/grado.schema';

export interface FormItemProps {
    grado?: Grado
}

export const FormItem = (props: FormItemProps) => {
    const { grado } = props;
    const { register, control, errors } = useFormContext<IGradoSchema>();

    return <form>
        <Grid container spacing={3}>
            {
                grado && <>
                    <Grid item xs={6}>Código:</Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="id"
                            inputRef={register}
                            defaultValue={grado.id}
                            error={!!errors.id}
                            helperText={errors.id && errors.id.message}
                        />
                    </Grid>
                </>
            }
            <Grid item xs={6}>Nombre:</Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    inputRef={register}
                    name="nombre"
                    defaultValue={grado?.nombre}
                    error={!!errors.nombre}
                    helperText={errors.nombre && errors.nombre.message}

                />
            </Grid>
            <Grid item xs={6}>Estado:</Grid>
            <Grid item xs={6}>
                <SelectReactHookForm
                    label="estado-label"
                    name="estado"
                    defaultValue={grado?.estado?.id}
                    control={control}
                    error={!!errors.estado}
                    errorMessage={errors.estado?.message}
                >
                    <MenuItem value="">
                        <em>Seleccione</em>
                    </MenuItem>
                    {estadosProcesamiento.map((estado, index) => <MenuItem key={index} value={estado.id}>{estado.nombre}</MenuItem>)}
                </SelectReactHookForm>
            </Grid>
        </Grid>
    </form>
}

