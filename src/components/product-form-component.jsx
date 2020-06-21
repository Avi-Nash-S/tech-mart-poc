import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ProductFormList = (product) => Object.entries(product);

const ProductForm = ({ formView, onFormEdit, productEditData }) => {
  return (
    <Dialog
      open={formView}
      onClose={onFormEdit}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {productEditData.productName}
      </DialogTitle>
      <DialogContent>
        <DialogContentText></DialogContentText>
        {productEditData &&
          ProductFormList(productEditData).map((fieldData, index) => (
            <TextField
              disabled={index === 0}
              autoFocus
              key={fieldData[0]}
              margin="dense"
              id={fieldData[0].toUpperCase()}
              label={fieldData[0].toUpperCase()}
              type="text"
              defaultValue={fieldData[1]}
              fullWidth
            />
          ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onFormEdit} color="primary">
          Cancel
        </Button>
        <Button onClick={onFormEdit} color="primary">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductForm;
