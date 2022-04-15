import React from 'react';
import BackDropUtils from './BackDropUtils';
import ColorModeContextProvider from './ColorModeContextProvider';
import { SnackbarUtilsConfigurator } from './SnackbarUtils';

export default function GeneralProvider({ children }: any) {

  return (
    <ColorModeContextProvider>

      <BackDropUtils />

      {children}

      <SnackbarUtilsConfigurator />

    </ColorModeContextProvider>
  );

}

