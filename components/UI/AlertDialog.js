import React from "react";
import { AlertDialog, Button } from "native-base";

import CustomButton from "./Button";

const CustomDialog = ({
  isOpen,
  onClose,
  onConfirm,
  cancel,
  confirm,
  title,
  message,
}) => {
  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>{title}</AlertDialog.Header>
        <AlertDialog.Body>{message}</AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <CustomButton onPress={onClose} w={20}>
              {cancel}
            </CustomButton>
            <CustomButton onPress={onConfirm} w={20}>
              {confirm}
            </CustomButton>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default CustomDialog;
