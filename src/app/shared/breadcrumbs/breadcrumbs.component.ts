import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent {
  titulo: string = '';
  constructor(private router: Router) {
    this.router.events
        .pipe(
          filter((e): e is ActivationEnd => e instanceof ActivationEnd),
          filter((e: ActivationEnd) => e.snapshot.firstChild === null),
          map((e:ActivationEnd) => e.snapshot.data)
        )
        .subscribe( e => {
          this.titulo = e['titulo']
        })
  }
}
