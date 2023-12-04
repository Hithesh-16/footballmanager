import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { colors } from "../Theme/Colors.styles";

const BootstrapDialog = styled(Dialog)(({ theme, props }) => ({
  "& .MuiDialog-root": {
    color: colors.text.normal
  },
  "& .MuiDialog-paper": {
    backgroundColor: colors.layout.secondary,
    color: colors.text.normal
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  },
  "& .MuiDialogContent-dividers": {
    borderTop: (prop) => (!prop?.disableDividers ? "1px solid  #494949" : "none"),
    borderBottom: (prop) => (!prop?.disableDividers ? "1px solid  #494949" : "none")
  }
}));

function BootstrapDialogTitle({ children, onClose, showCloseIcon, ...other }) {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      <Typography variant='18600'>{children}</Typography>
      {onClose && showCloseIcon ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

/**
 * It's a wrapper around the Material UI Dialog component that allows you to pass in a title,
 * footer, and children as a dialog content which is auto scrollable
 */
function AppDialog({
  children,
  setOpen,
  open,
  maxWidth = "md",
  dialogTitle,
  footer,
  doHandleClose,
  isHandleClose,
  showCloseIcon = true,
  contentSx,
  disableDividers,
  disableBackdropClick,
  ...props
}) {
  const handleClose = (event, reason) => {
    // if (!showCloseIcon && reason && reason === "backdropClick" && "escapeKeyDown") return;
    setOpen(false);
  };

  return (
    <BootstrapDialog
      fullWidth
      disableDividers={disableDividers}
      disableBackdropClick={disableBackdropClick}
      maxWidth={maxWidth}
      onClose={(e, r) => (showCloseIcon && isHandleClose ? doHandleClose() : handleClose(e, r))}
      open={open}
      {...props}
    >
      <BootstrapDialogTitle
        id='customized-dialog-title'
        showCloseIcon={showCloseIcon}
        onClose={(e, r) => (showCloseIcon && isHandleClose ? doHandleClose : handleClose(e, r))}
      >
        {dialogTitle && (
          <Typography fontFamily='fontBold' fontSize={16}>
            {dialogTitle}
          </Typography>
        )}
      </BootstrapDialogTitle>
      <DialogContent sx={{ ...contentSx }} dividers>
        {children}
      </DialogContent>
      {footer && <DialogActions>{footer}</DialogActions>}
    </BootstrapDialog>
  );
}

AppDialog.propTypes = {
  children: PropTypes.any.isRequired,
  dialogTitle: PropTypes.any,
  footer: PropTypes.any,
  open: PropTypes.any.isRequired,
  setOpen: PropTypes.func.isRequired,
  showCloseIcon: PropTypes.bool
};

export default AppDialog;
