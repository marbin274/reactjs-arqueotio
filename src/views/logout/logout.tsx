import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import { authLogout } from 'redux-app/auth/actions';

const Logout: FunctionComponent = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        return () => {
            dispatch(authLogout());
        }
    });

    return <Redirect to="/" />;
}

export default Logout;