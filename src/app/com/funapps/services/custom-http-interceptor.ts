import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
         HttpEvent,
         HttpInterceptor,
         HttpHandler,
         HttpRequest,
         HttpResponse,
         HttpErrorResponse,
         HttpSentEvent,
         HttpHeaderResponse,
         HttpProgressEvent,
         HttpUserEvent
} from '@angular/common/http';
@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
         intercept(
                  req: HttpRequest<any>,
                  next: HttpHandler
         ): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
                  const started = Date.now();
                  // loading should start here
                  return next.handle(req).pipe(tap(
                           event => {
                                    if (event instanceof HttpResponse) {
                                             const elapsed = Date.now() - started;
                                             console.log(req.url + " took " + elapsed, " ms")
                                    }
                                    //end loading
                           },
                           (error: any) => {
                                    if (error instanceof HttpErrorResponse) {
                                             this.showErr(error)
                                             console.log("Problem occured", error)
                                    }
                                    //end loading
                           }

                  ))
         }
         showErr(error) {
                  if (error.status == 0) {

                  }
         }
}
