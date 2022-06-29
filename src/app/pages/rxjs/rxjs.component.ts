import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  intervalSubs: Subscription;
  
  constructor() {
    // this.retornaObservable().pipe(
    //   retry()
    // )
    // .subscribe({
    //   next: (v) => console.log(v),
    //   error: (e) => console.error(e),
    //   complete: () => console.log('complete')
    // });

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
  
  retornaIntervalo(): Observable<number> {
    const interval$ = interval(100).pipe(
      map(v => v*10),
      filter(v => ((v % 2) === 0) ? true : false),
      // take(10),
    )
    return interval$;
  }
  
  retornaObservable(): Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if ( i === 4 ){
          clearInterval(intervalo);
          observer.complete();
        }
        if ( i === 2 ) {
          // i = 0;
          console.log('paso');
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });
    return obs$;
  }
 

}
