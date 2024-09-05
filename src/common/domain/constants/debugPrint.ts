import { enviromentDebug } from './e';

export const debugPrint = (message?: any, ...optionalParams: any[]): void => {
  if (enviromentDebug) {
    console.log(message, ...optionalParams);
  }
};
