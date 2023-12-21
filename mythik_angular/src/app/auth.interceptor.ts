import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const compte = this.authService.getCompte();
    if(compte) {

      const b64 = btoa(compte.login + ":" + compte.password); 

      request = request.clone({
          setHeaders: { 
              Authorization: `Basic ${b64}`
          }
      });

    }

    return next.handle(request);
  }
}
