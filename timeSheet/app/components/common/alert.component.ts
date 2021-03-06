import { Component, ViewChild,ElementRef, OnInit } from '@angular/core';
 
import { AlertService } from '../../services/alert.service';
 
@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: '../../templates/common/alert.component.html'
})
 
export class AlertComponent {
    message: any;
    showModal: boolean;
    constructor(private alertService: AlertService) { }
 
    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }

    hide() {
        this.message = null;
    }

    hideModal() {
        console.log("alert component modal method");
        setTimeout(()=>{ this.closeAlert.nativeElement.click(); },10000);
    }

}