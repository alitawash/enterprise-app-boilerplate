import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorExporter } from './error-exporter';
@Injectable({
         deps:[ErrorExporter],
         providedIn: 'root'
})

export class CustomErrorHandler implements ErrorHandler {
         
         constructor(errorExporter:ErrorExporter){
         }
         handleError(err: any): void {
                  console.log(err)
         }
}
