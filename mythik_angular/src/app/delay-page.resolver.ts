import { ResolveFn } from '@angular/router';
import { timer, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// resolver to delay page load to allow animations
export const delayPageResolver: ResolveFn<boolean> = (route, state) => {
    // Set the delay time in milliseconds (e.g., 2000 for 2 seconds)
    let delayTime = 500; // default

    // overwrite default delay
    if (route.data['delay']){ // if delay value was passed to the route
      delayTime = route.data['delay']; // overwrite
    }

  // Using RxJS timer to create an observable that emits after the specified delay
  return timer(delayTime).pipe(
    // Using mergeMap to switch to a new observable after the delay
    mergeMap(() => {
      // Returning a resolved value after the delay
      return of(true);
    })
  );
};
