import { Urls } from './urls';
import { Injectable } from '@angular/core';
@Injectable({
         providedIn: 'root'
})
export class AppConfig {
         private config: {
                  "urlMap": Urls;
                  "logExport": null
         }
         constuctor() {
                  this.config = {
                           urlMap: new Urls(),
                           logExport: null
                  }
         }
         loadConfig(configObj: any) {
                  if (configObj && configObj.urlMap) {
                           this.config.urlMap.populateMap(configObj.urlMap)
                  }
                  // if (configObj && configObj.logExport) {
                  //          this.config.logExport = configObj.logExport
                  // }
                  this.config = Object.assign(this.config, configObj)
                  console.log(this.config)
         }
         public getUrlMap() {
                  return this.config.urlMap;
         }
         public getLogExporter(){
                  return this.config.logExport
         }
         getUserInfo() {
                  return null;
         }

         getAppToken() {
                  return null;
         }

}
