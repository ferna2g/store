import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

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
              finalize(() => this.service.hide())
            );
  } 
}
