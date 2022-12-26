import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class LoggingService{
    log(name:string,pass:string):string{
        console.log(pass);
        if(name==='akshu'&&pass==='pass123'){
            return 'Login success'
        }
        else{
            return 'Login failed'
        }


    }
}