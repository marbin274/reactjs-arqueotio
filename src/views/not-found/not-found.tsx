import { Typography } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return <div>
        <Typography variant="h1">Página no encontrada</Typography>
        <Link to="/">
            <Typography variant="h4" component="div">Clic aquí para volver al inicio</Typography>
        </Link>
    </div>
}

export default NotFound;