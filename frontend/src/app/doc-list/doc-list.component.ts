import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../doctor.service";

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css']
})
export class DocListComponent implements OnInit {

  doctors : any = {};
  constructor(private docService : DoctorService) {

    this.docService.getDoctors().subscribe((data) => {
      this.doctors = data;
    },
    error => console.log(error)
    )
  }

  ngOnInit() {
  }

}
