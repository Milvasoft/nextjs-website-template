/* eslint-disable react/destructuring-assignment */
import { useSnackbar } from 'notistack';
import React from 'react';

function InnerSnackbarUtilsConfigurator(props: any) {

  props.setUseSnackbarRef(useSnackbar());
  return null;

}

let useSnackbarRef: any;

const setUseSnackbarRef = (useSnackbarRefProp: any) => {

  useSnackbarRef = useSnackbarRefProp;

};

export function SnackbarUtilsConfigurator() {

  return <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />;

}

export const snackActions = {

  toast(msg: string, variant = 'success', autoHideDuration = 3000) {

    useSnackbarRef?.enqueueSnackbar(msg, { variant, autoHideDuration });

  }
};
