import { CustomHttpService } from './custom-http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DalService {

  constructor(private customHTTP: CustomHttpService) { }

  public getConfig(){
    return this.customHTTP.getReq("")
  }
  public getEnvSpecificConfig(url){
    return this.customHTTP.getReq(url);
  }
}
