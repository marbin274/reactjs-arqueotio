import * as React from "react";
import { useQuery } from "react-query";
import { ItemsApi } from "api/items.api";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Details as DetailsIcon,
} from "@material-ui/icons";
import { Grado } from "models/grado";
import { ResponseObject } from "models/response-object";
import { RouteComponentProps, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appShowDialogConfirmation } from "redux-app/app/actions";
import { DialogGlobalProps } from "redux-app/app/types";
import { PaperCustom } from "components";

const TableList = (props: RouteComponentProps) => {
  const { data, isLoading, error } = useQuery<
    ResponseObject<Grado[]> | undefined
  >("itemsList", ItemsApi.list, {
    retry: 1,
    retryDelay: 3000,
    refetchOnWindowFocus: false,
  });

  const dispath = useDispatch();

  const deleteItem = (index: number) => { };

  const handleClickDelete = (index: number) => {
    const confirmationMessage: DialogGlobalProps = {
      content: (
        <Typography variant="body2">
          ¿Está seguro de eliminar el registro?
        </Typography>
      ),
      onAccept: () => {
        deleteItem(index);
      },
    };
    dispath(appShowDialogConfirmation(confirmationMessage));
  };

  if (isLoading) {
    return (
      <Typography variant="body2" component="p">
        Cargando
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="body2" component="p">
        Error al cargar el componente
      </Typography>
    );
  }
  const items: Grado[] | null =
    data && data.data && data.data.length > 0 ? data.data : null;
  return (
    <PaperCustom>
      <Typography variant="h5">Table list</Typography>
      <br />
      <Button color="primary" variant="contained" component={Link} to={`${props.match.path}/register`}>Agregar</Button>
      {!items && <Typography>No se encontró registros</Typography>}
      {items && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Grado</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((grado: Grado, index: number) => (
              <TableRow key={index}>
                <TableCell>{grado.id}</TableCell>
                <TableCell>{grado.nombre}</TableCell>
                <TableCell>{grado.estado?.nombre}</TableCell>
                <TableCell>
                  <Link to={`${props.match.path}/edit/${index}`}>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <Link to={`${props.match.path}/detail/${index}`}>
                    <IconButton>
                      <DetailsIcon color="secondary" />
                    </IconButton>
                  </Link>
                  <IconButton
                    onClick={() => {
                      handleClickDelete(index);
                    }}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </PaperCustom>
  );
};

export default withRouter(TableList);
