import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ReCAPTCHA from "react-google-recaptcha";
import { PageType } from "views/types";

import "views/login/login.scss";
import { useDispatch, useSelector } from "react-redux";
import { appShowAlertError } from "redux-app/app/actions";
import { LoginInputs } from "views/login/types";
import { loginSchema } from "views/login/schema.yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import logoMinedu from "images/login/logo-minedu.png";
import logoSiagie from "images/login/logo-siagie.png";
import { IRootReducer } from "redux-app/reducer";
import { auth } from "redux-app/auth/actions";

const GOOGLE_API: string = process.env.REACT_APP_GOOGLE_API as string;
const requiredCaptcha: boolean =
  process.env.REACT_APP_REQUIRE_CAPTCHA === undefined ||
  process.env.REACT_APP_REQUIRE_CAPTCHA === "true"
    ? true
    : false;

const page: PageType = {
  title: "Iniciar sesión",
};

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  justify: {
    textAlign: "justify",
  },
}));

const recaptchaRef = React.createRef<ReCAPTCHA>();

function Login() {
  document.title = page.title;

  const [captcha, setCaptcha] = React.useState<{
    value: string | null;
    hasError: boolean;
  }>({ value: "", hasError: false });

  const { register, handleSubmit, errors } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
  });

  const {
    loading: isLoginLoading,
    error,
  } = useSelector((state: IRootReducer) => state.auth);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onChangeCaptcha = (value: any) => {
    setCaptcha({
      value: value,
      hasError:
        value === null ||
        value === undefined ||
        value === "" ||
        value.length === 0,
    });
  };

  const loginFailed = React.useCallback(() => {
    recaptchaRef.current?.reset();
    setCaptcha({ value: "", hasError: false });
  }, []);

  const validateCaptcha = (): boolean => {
    let hasErrorCaptcha: boolean = !requiredCaptcha
      ? false
      : captcha.value?.length === 0;
    if (hasErrorCaptcha) {
      dispatch(
        appShowAlertError({ message: "Debe marcar el captcha de seguridad" })
      );
      return false;
    }
    return true;
  };

  const handleLogin = (data: LoginInputs) => {
    if (isLoginLoading || !validateCaptcha()) {
      return;
    }
    dispatch(auth({ username: data.username, password: data.password }));
  };

  React.useEffect(() => {
    if (error) {
      loginFailed();
    }
  }, [error, loginFailed]);

  return (
    <div className="login">
      <Container component="main" maxWidth="sm" className="login__contenedor">
        <Grid container spacing={4}>
          <Grid item xs={2}>
            <img
              src={logoSiagie}
              alt=""
              className="login__contenedor__imagen"
            />
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={6}>
            <img
              src={logoMinedu}
              alt=""
              className="login__contenedor__imagen"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          className="login__contenedor__info"
          style={{ backgroundColor: "#fff" }}
        >
          <Grid item xs={12}>
            <Typography variant="h4" color="primary" align="center">
              Bienvenido al SIAGIE
            </Typography>
            <Typography variant="body2" align="center">
              Sistema de Información de Apoyo a la Gestión de la Institución
              Educativa
            </Typography>
          </Grid>
          <Container component="section" className="login__form" maxWidth="xs">
            <form noValidate onSubmit={handleSubmit(handleLogin)}>
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Usuario"
                    name="username"
                    autoComplete="off"
                    autoFocus
                    error={!!errors.username}
                    helperText={errors.username && errors.username.message}
                    disabled={isLoginLoading}
                    className="login__form__usuario"
                    size="medium"
                    inputRef={register({ required: true })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="off"
                    error={!!errors.password}
                    helperText={errors.password && errors.password.message}
                    disabled={isLoginLoading}
                    inputRef={register}
                  />
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item xs={9}>
                    {
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={GOOGLE_API}
                        onChange={onChangeCaptcha}
                      />
                    }
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={isLoginLoading}
                    type="submit"
                  >
                    {isLoginLoading ? "Comprobando..." : "Iniciar sesión"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Grid>

        <Grid container spacing={4} className="login__contenedor__footer">
          <Grid item xs={12}>
            <Typography variant="caption" component="p" align="center">
              © 2020 Todos los derechos reservados.
              <br />
              Ministerio de Educación. Versión 1.0
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
