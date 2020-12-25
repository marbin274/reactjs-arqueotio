import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
} from "@material-ui/core";
import { PaperCustom } from "components";
import { Seccion } from "models/seccion";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import useGetItem from "views/table-view/hooks/use-get-items";

interface TableDetailProps {
  index: string;
}

const TableDetail = (props: RouteComponentProps<TableDetailProps>) => {
  const { index } = props.match.params;

  const { data, isLoading, isError } = useGetItem(index);
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
      <Typography variant="h3" color="textPrimary">
        Table detail: Id item: {data?.id} - index: {index}
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <strong>Nombre</strong>
            </TableCell>
            <TableCell>{data?.nombre}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Estado</strong>
            </TableCell>
            <TableCell>{data?.estado?.nombre}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <strong>Secciones:</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Código</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Nombre</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Estado</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.secciones.map((seccion: Seccion, index: number) => (
                    <TableRow key={index}>
                      <TableCell>{seccion.id}</TableCell>
                      <TableCell>{seccion.nombre}</TableCell>
                      <TableCell>{seccion.estado?.nombre}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </PaperCustom>
  );
};

export default withRouter(TableDetail);
