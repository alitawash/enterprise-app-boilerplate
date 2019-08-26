import { Injectable } from '@angular/core';
import { AppConfig } from './../config/app-config';
import * as Sentry from "@sentry/browser";

Sentry.init({
         dsn: "https://fbe628aedb9a471a85ac2df0c5a0fb64@sentry.io/1541213"
});

@Injectable({
         providedIn: 'root'
})

export class ErrorExporter {
         constructor(private appConfig: AppConfig) { }
         private exportLogsToSentry(err: any) {
                  const eventId = Sentry.captureException(err.originalError || err);
         }
         public exportErr(err) {
                  if (this.appConfig.getLogExporter() == 'SENTRY') {
                           this.exportLogsToSentry(err)
                  }
                  else {
                           console.log("No exporters to send error logs")
                  }
         }
}
