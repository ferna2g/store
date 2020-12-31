import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ProgressIndicatorService } from './progress-indicator.service';
import { Observable } from 'rxjs';
import { delay, finalize, tap } from 'rxjs/operators';

//Angular interceptors

@Injectable({
  providedIn: 'root'
})
export class ProgressIndicatorInterceptor implements HttpInterceptor {
  constructor(private service: ProgressIndicatorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(req)
            .pipe(
              tap(value => this.service.show()),
              delay(1000),
              finalize(() => this.service.hide())
            );
  }
}
