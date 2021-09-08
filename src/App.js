import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100vw",
  },
  image: {
    backgroundImage:
      "url(https://pingidentity.com/content/dam/ping-6-2-assets/open-graph-images/2019/P14C-Build-OG.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#576877",
    backgroundSize: "cover",
    backgroundPosition: "center",
    maxHeight: "20vw",
  },
  paper: {
    display: "flex",
    height: "100%",
    maxWidth: "100%",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    color: "#2E4355",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#2E4355",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    backgroundColor: "#2E4355",
    margin: theme.spacing(3, 0, 2),
  },
  typography: {
    color: "#2E4355",
    fontSize: "1rem",
  },
  errorMessage: {
    color: "red",
  },
  infoPaperContainer: {
    maxHeight: "100%",
    overflow: "auto",
  },
  info: {
    height: "100%",
    maxHeight: "100%",
    color: "#2E4355",
    margin: "0",
    padding: "0",
  },
}));

export default function App() {
  // Use the above styles.
  const classes = useStyles();

  // Ref to focus on textfield when using copy.
  const inputRef = React.useRef();

  // State variables and setters.
  const [anchorEl, setAnchorEl] = useState(null);
  const [encoded, setEncoded] = useState("");
  const [error, setError] = useState("");
  const [decoded, setDecoded] = useState("");

  // For popover error message.
  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;

  // Submit button.
  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      encode();
    } catch (e) {
      // Gets the reason for failure.
      let msg = e.message.split(". ")[1];
      console.error(msg);
      setError(msg);
      setAnchorEl(event.currentTarget);
    }
  };

  // Popover error message is closed.
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Copy encocded text to clipboard.
  const handleCopy = (event) => {
    event.preventDefault();

    if (encoded) {
      try {
        copyTextToClipboard(encoded);
      } catch (err) {
        setError(err);
        setAnchorEl(event.currentTarget);
      }
    } else {
      setError("No text to copy. Try encoding something first.");
      setAnchorEl(event.currentTarget);
    }
  };

  const fallbackCopyTextToClipboard = (text) => {
    try {
      // Focus document on textfield for decoded string
      inputRef.current.parentNode.focus();

      const successful = document.execCommand("copy");
      if (successful) {
        console.log("Copying to clipboard was successful (execCommand)!");
      }
    } catch (err) {
      throw "Failed to copy (using execCommand). " + err;
    }
  };

  const copyTextToClipboard = (text) => {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Copying to clipboard was successful!");
      },
      (err) => {
        throw "Failed to copy (using navigator).";
      }
    );
  };

  // Text change for the encoded string.
  const handleDecodedChange = (event) => {
    event.preventDefault();
    setDecoded(event.target.value);
  };

  // Encode method for translating the string into base64.
  const encode = () => {
    const encoded = Buffer.from(decoded, "utf8").toString("base64");
    setEncoded(encoded);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid
        item
        container
        xs={12}
        component={Paper}
        elevation={6}
        square
        justifyContent="flex-start"
        style={{ maxWidth: "100%" }}
      >
        <Grid
          item
          container
          justifyContent="flex-start"
          className={classes.paper}
          direction="column"
        >
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            style={{
              flex: "0 1 0",
            }}
          >
            <Avatar className={classes.avatar}>
              <LockOpenIcon />
            </Avatar>
          </Grid>
          <Grid item xs={12} style={{ flex: "0 10 0" }}>
            <Typography component="h4" variant="h4" align="center">
              Base64 Encoder
            </Typography>
          </Grid>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid
              item
              container
              direction="column"
              alignItems="stretch"
              xs={12}
              style={{ flex: "10 0 auto" }}
            >
              <Grid item xs={12} style={{ flex: "10 0 auto" }}>
                {/* JWT input field */}
                <TextField
                  variant="outlined"
                  margin="none"
                  required
                  fullWidth
                  id="decoded"
                  label="Decoded String"
                  name="Decoded"
                  value={decoded}
                  autoFocus
                  maxRows={4}
                  multiline
                  onChange={handleDecodedChange}
                />

                {/* Error Message for JWT String Decode */}
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Typography className={classes.errorMessage}>
                    {error}
                  </Typography>
                </Popover>
              </Grid>
              <Grid item xs={12} style={{ flex: "1 0 auto" }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Encode
                </Button>
              </Grid>
              <Grid container item xs={12} style={{ paddingBottom: "1rem" }}>
                <Grid item xs={11}>
                  <TextField
                    variant="outlined"
                    margin="none"
                    required
                    fullWidth
                    id="encoded"
                    label="Encoded String"
                    name="Encoded"
                    value={encoded}
                    maxRows={4}
                    multiline
                    inputRef={inputRef}
                    readOnly
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    onClick={handleCopy}
                    aria-label="copy"
                    color="inherit"
                  >
                    <FileCopyIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}
