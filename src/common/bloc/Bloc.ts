import { Subscription } from 'rxjs';
import { debugPrint } from '../domain/constants/debugPrint';

type StateSubscription<T> = (oldState: T, newState: T) => void;

export abstract class Bloc<T> {
  private internalState: T;
  private isClosed = false;
  private listeners: StateSubscription<T>[] = [];
  private disposable = new Subscription();

  constructor(initialState: T) {
    // debugPrint(`${this.constructor.name} constructor`);
    this.internalState = initialState;
  }

  public get state(): T {
    return this.internalState;
  }

  didMount() {
    this.isClosed = false;
    // debugPrint(`${this.constructor.name} didMount`);
  }
  didClose() {
    this.listeners = [];
    this.isClosed = true;
    this.disposable.unsubscribe();
    // debugPrint(`${this.constructor.name} didClose`);
  }

  checkProviderIfBlocIsClosed() {
    if (!this.isClosed) {
      throw new Error(
        "The method 'didClose' must be called in the derived class."
      );
    }
  }

  emit(state: T) {
    //debugger;
    const oldState: T = this.internalState;
    this.internalState = state;

    if (this.isClosed) {
      return;
    }
    if (this.listeners.length > 0) {
      this.listeners.forEach((listener) =>
        listener(oldState, this.internalState)
      );
    }
  }

  // launchJob(job: () => Subscription) {
  //   const subscription = job();
  //   this.disposable.add(subscription);
  // }

  subscribe(listener: StateSubscription<T>) {
    this.listeners.push(listener);
  }

  unsubcribe(listener: StateSubscription<T>) {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }
}
