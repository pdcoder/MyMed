import {Component, HostListener, OnInit} from '@angular/core';
import {DoctorService} from "../doctor.service";
import {NgForm} from "@angular/forms";
import {ApiResponse} from "../login/ApiResponse.model";
import {Observable} from "rxjs";
import {AppError} from "../app.error";
import {LoginService} from "../login.service";
import {HttpClient} from "@angular/common/http";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css'],
  animations: [
    trigger('hover', [
      state('initial', style({
        boxShadow : 'none'
      })),
      state('final', style({
        boxShadow : '1px 1px 2px black, 0 0 10px blue, 0 0 5px lightblue'
      })),
      transition('initial=>final', animate('0ms ease')),
      transition('final=>initial', animate('0ms 500ms ease'))
    ]),
  ]
})
export class DocListComponent implements OnInit {

  doctors : any = {}
  errors : string;
  currentstate : string ;
  constructor(private http : HttpClient, private docService : DoctorService, private authService : LoginService) {

    this.docService.getDoctors().subscribe((data) => {
      this.doctors = data;
    },
    error => console.log(error)
    )
  }

  ngOnInit() {
  }

  bookDoc(id : number, date : string){
    console.log("ddd");
    this.http.post<ApiResponse>('/api/bookdoc', {
      docid : id,
      date : date,
      email: this.authService.getEmail()
    }).catch((error: Response) => {

      return Observable.throwError(new AppError(error))})
      .subscribe((response : ApiResponse) => {
        this.errors = response.message;
        if(this.errors === 'Appointment reserved'){
          this.authService.checkAuth();
          this.authService.sendToken(response.details);
        }
        else
        {
          alert("failed");
          this.errors = response.message;
        }
      }, (err : AppError) => {
        console.log("sub error");

        this.errors = err.message;
        throw err;

      });
  }

  @HostListener('mouseover') onMouseOver() {
    this.currentstate = 'final';
  }

  @HostListener('mouseout') onMouseOut() {
    this.currentstate = 'initial';
  }
}
