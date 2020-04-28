import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import NotesIcon from '@material-ui/icons/NotesOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Alert, { AlertProps } from '@material-ui/lab/Alert';
import { useTranslation } from '../hooks';

type FormValues = {
  email: string;
  message: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    textAlign: 'center',
  },
  questions: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),

    '& > p': {
      margin: 0,
    },
  },
  form: {
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(5),
  },
  emailField: {
    marginBottom: theme.spacing(1.5),
  },
  messageField: {
    marginBottom: theme.spacing(1.5),

    '& .MuiInputAdornment-root': {
      position: 'absolute',
      top: theme.spacing(3.5),
    },

    '& textarea': {
      paddingLeft: theme.spacing(4),
    },
  },
}));

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const defaultSnackbarState = { visible: false, severity: '' as AlertProps['severity'], message: '' };

const Contact = () => {
  const classes = useStyles();
  const [snackbar, setSnackbar] = React.useState(defaultSnackbarState);
  const { t } = useTranslation('contact');

  const defaultValues: FormValues = {
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required(t('validation_required')).email(t('validation_email')),
    message: Yup.string().required(t('validation_required')),
  });

  const { handleSubmit, control, errors } = useForm<FormValues>({ validationSchema, defaultValues });

  const onSubmit = async (values: FormValues) => {
    try {
      await axios.post('/', encode({ 'form-name': 'contact', ...values }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      setSnackbar({ visible: true, message: t('success_message'), severity: 'success' });
    } catch {
      setSnackbar({ visible: true, message: t('error_message'), severity: 'error' });
    }
  };

  const handleSnackbarClose = () => setSnackbar(defaultSnackbarState);

  return (
    <div className={classes.root}>
      <Typography variant="h4">{t('heading')}</Typography>
      <Typography className={classes.questions} variant="subtitle1" color="textSecondary">
        <p>{t('question1')}</p>
        <p>{t('question2')}</p>
        <p>{t('question3')}</p>
        <p>{t('question4')}</p>
      </Typography>
      <Typography variant="subtitle2">{t('form_title')}</Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          as={TextField}
          control={control}
          defaultValue=""
          fullWidth
          label={t('email_field_label')}
          className={classes.emailField}
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email?.message || ' '}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <Controller
          name="message"
          as={TextField}
          control={control}
          defaultValue=""
          fullWidth
          label={t('message_field_label')}
          className={classes.messageField}
          variant="outlined"
          multiline
          rows="4"
          error={!!errors.message}
          helperText={errors.message?.message || ' '}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NotesIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button fullWidth color="primary" variant="contained" type="submit">
          {t('submit_text')}
        </Button>
      </form>

      <Snackbar
        open={snackbar.visible}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert variant="filled" elevation={6} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
