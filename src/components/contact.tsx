import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import NotesIcon from '@material-ui/icons/NotesOutlined';
import { makeStyles } from '@material-ui/core/styles';

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
  passwordField: {
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

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">Contact us</Typography>
      <Typography className={classes.questions} variant="subtitle1" color="textSecondary">
        <p>Cannot find the component, you needed?</p>
        <p>Want to give us some feedback about our work?</p>
        <p>Found some problem or hava an idea for the improvement?</p>
        <p>Want to ask us some question about the UI Kit?</p>
      </Typography>
      <Typography variant="subtitle2">Use the form below to contact us</Typography>
      <form className={classes.form}>
        <TextField
          fullWidth
          name="email"
          label="E-mail address"
          className={classes.emailField}
          variant="outlined"
          helperText=" "
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          name="message"
          label="Your message"
          className={classes.passwordField}
          variant="outlined"
          multiline
          rows="4"
          helperText=" "
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NotesIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button fullWidth color="primary" variant="contained" type="submit">
          Send e-mail
        </Button>
      </form>
    </div>
  );
};

export default Contact;
