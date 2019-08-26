export class Urls {
         urlMap = {
                  MAIN_CONFIG: "",
                  GET_USER_INFO: ""
         }
         constructor() { }
         getMap() {
                  return this.urlMap.MAIN_CONFIG = "assets/config/main.config.json";
         }
         populateMap(urlObj: any) {
                  console.log("#BEFORE: ", this.urlMap)
                  this.urlMap = Object.assign(this.urlMap, urlObj)
                  console.log("#AFTER: ", this.urlMap)
         }
}
