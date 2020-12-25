import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Typography } from "@material-ui/core";
import { PaperCustom } from "components";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { RouteComponentProps, withRouter } from "react-router";
import useGetItem from "views/table-view/hooks/use-get-items";
import { FormItem } from "./components/form-item/form-item";
import FormSecciones from "./components/form-secciones/form-secciones";
import { gradoSchema, IGradoSchema } from "schemas/grado.schema";

interface TableRegisterProps {
  index: string;
}

const TableRegister = (props: RouteComponentProps<TableRegisterProps>) => {
  const { index } = props.match.params;
  const { isIdle, data, isLoading, isError } = useGetItem(index, !!index);
  const methodsGrado = useForm<IGradoSchema>({
    resolver: yupResolver(gradoSchema(index ? "edit" : "add")),
    mode: "onBlur"
  });

  const handleSaveGrado = (data: IGradoSchema) => {
    console.log(JSON.stringify(data));

  }

  if (isLoading) {
    return <Typography variant="body2">Cargando Item...</Typography>;
  }
  if (isError) {
    return (
      <Typography variant="body2" color="error">
        Error al cargar el Item
      </Typography>
    );
  }

  return (
    <PaperCustom>

      <form noValidate id="form-grado" onSubmit={methodsGrado.handleSubmit(handleSaveGrado)}></form>
      <Typography variant="h4">{!isIdle ? `Edit table - Item id: ${data?.id}` : "Register table"}</Typography>
      <br />
      <br />
      <FormProvider {...methodsGrado} >
        <FormItem grado={data} />
      </FormProvider >
      <br />
      <br />
      <Typography variant="h4">Secciones</Typography>
      <br />
      <br />
      <FormProvider {...methodsGrado} >
        <FormSecciones secciones={data?.secciones} />
      </FormProvider >
      <Button
        type="submit"
        form="form-grado"
        variant="contained"
        color="primary"
      >Guardar</Button>

    </PaperCustom>
  );
};


export default withRouter(TableRegister);