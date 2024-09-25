import { Injectable } from "@angular/core";
import { AuthserviceService } from "../authservice.service";
import { Router ,CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";



@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(private authService:AuthserviceService,private router:Router){}

    canActivate(): boolean {
        if(this.authService.isLoggedId()){
            return true;
        }
        else{
            this.router.navigate(['/login']);
            return false;
        }
        
    }
}