import { Backdrop, CircularProgress } from '@mui/material';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

let useBackDropRef: any;

const BackDrop = forwardRef((props, ref) => {

  const [open, setOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => ({

      onOpen() {

        setOpen(true);

      },

      onClose() {

        setOpen(false);

      }
    }),
  );

  return (
    <Backdrop sx={{ zIndex: 99999999 }} open={open}>
      <CircularProgress color="primary" />
    </Backdrop>

  );

});

const setUseBackDropRef = (useBackdropRefProp: any) => {

  useBackDropRef = useBackdropRefProp;

};

function BackDropUtils() {

  return <BackDrop ref={setUseBackDropRef} />;

}

export const backdropActions = {

  open() {

    useBackDropRef && useBackDropRef?.onOpen();

  },
  close() {

    if (useBackDropRef) useBackDropRef?.onClose();

  }
};


export default BackDropUtils;
