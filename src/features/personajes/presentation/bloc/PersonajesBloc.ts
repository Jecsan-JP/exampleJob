import { Bloc } from '@/common/bloc/Bloc';
import  PersonajesState  from './PersonajesState';

export default class PersonajesBloc extends Bloc<PersonajesState> {
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