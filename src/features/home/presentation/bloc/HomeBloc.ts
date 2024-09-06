import { Bloc } from '@/common/bloc/Bloc';
import  HomeState  from './HomeState';

export default class HomeBloc extends Bloc<HomeState> {
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