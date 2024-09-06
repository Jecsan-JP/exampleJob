import { Bloc } from '@/common/bloc/Bloc';
import  AppState  from './AppState';

export default class AppBloc extends Bloc<AppState> {
  constructor() {
    super({
     isLoading:false
    });
  }

  showLoader(show: boolean) {
    this.emit({
      ...this.state,
      isLoading: show,
    });
  }
}