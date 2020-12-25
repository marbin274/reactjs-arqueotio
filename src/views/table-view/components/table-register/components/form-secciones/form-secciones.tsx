import { yupResolver } from '@hookform/resolvers/yup';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons'
import { Seccion } from 'models/seccion';
import * as React from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { FormRowSeccion } from './form-row-seccion';
import { ISeccionSchema, seccionSchema } from 'schemas/seccion.schema';
import { estadosProcesamiento } from 'views/table-view/components/table-register/estados';
import { IGradoSchema } from 'schemas/grado.schema';

interface FormSeccionesProps {
    secciones?: Seccion[]
};



const FormSecciones = (props: FormSeccionesProps) => {
    const [secciones, setSecciones] = React.useState<Seccion[]>(props.secciones ?? []);

    const methodsNewSeccion = useForm<ISeccionSchema>({
        resolver: yupResolver(seccionSchema("edit")),
        defaultValues: { id: '', nombre: '', estado: '' }
    });

    const methodsGrado = useFormContext<IGradoSchema>();

    const handleAddSeccion = (data: ISeccionSchema) => {
        const seccion = new Seccion();
        seccion.id = data.id;
        seccion.nombre = data.nombre;
        const estado = estadosProcesamiento.find(it => it.id === parseInt(data.estado));
        seccion.estado = !estado ? { id: 0, nombre: '' } : { id: estado.id, nombre: estado.nombre };
        setSecciones([...secciones, seccion]);
        methodsNewSeccion.reset();
    }

    return <>
        <form noValidate id="form-new-seccion" onSubmit={methodsNewSeccion.handleSubmit(handleAddSeccion)}></form>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Código</strong></TableCell>
                        <TableCell><strong>Nombre</strong></TableCell>
                        <TableCell><strong>Estado</strong></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <FormRowSeccion
                            register={methodsNewSeccion.register}
                            control={methodsNewSeccion.control}
                            seccion={{
                                id: { name: 'id', defaultValue: '', error: !!methodsNewSeccion.errors.id, errorText: methodsNewSeccion.errors.id && methodsNewSeccion.errors.id.message },
                                nombre: { name: 'nombre', defaultValue: '', error: !!methodsNewSeccion.errors.nombre, errorText: methodsNewSeccion.errors.nombre && methodsNewSeccion.errors.nombre.message },
                                estado: { name: 'estado', error: !!methodsNewSeccion.errors.estado, errorText: methodsNewSeccion.errors.estado && methodsNewSeccion.errors.estado.message }
                            }} />
                        <TableCell>
                            <IconButton form="form-new-seccion" type="submit" color="primary">
                                <AddIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    {secciones.map((seccion: Seccion, index: number) => <TableRow key={index}>
                        <FormRowSeccion
                            register={methodsGrado.register}
                            control={methodsGrado.control}
                            seccion={{
                                id: { name: `secciones[${index}].id`, defaultValue: seccion?.id, error: !!(methodsGrado.errors.secciones && methodsGrado.errors.secciones[index]?.id), errorText: methodsGrado.errors.secciones && methodsGrado.errors.secciones[index]?.id?.message },
                                nombre: { name: `secciones[${index}].nombre`, defaultValue: seccion?.nombre, error: !!(methodsGrado.errors.secciones && methodsGrado.errors.secciones[index]?.nombre), errorText: methodsGrado.errors.secciones && methodsGrado.errors.secciones[index]?.nombre?.message },
                                estado: { name: `secciones[${index}].estado`, defaultValue: seccion?.estado?.id, error: !!(methodsGrado.errors.secciones && methodsGrado.errors.secciones[index]?.estado), errorText: methodsGrado.errors.secciones && methodsGrado.errors.secciones[index]?.estado?.message },
                            }} />
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    </>;
}

export default FormSecciones;