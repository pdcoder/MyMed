import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from "../data.service";
import {Medicine} from "../cardlist/medicine.model";

@Component({
  selector: 'app-individual-med',
  templateUrl: './individual-med.component.html',
  styleUrls: ['./individual-med.component.css']
})
export class IndividualMedComponent implements OnInit {

  private id : string;
  public message : Medicine;
  constructor(private route: ActivatedRoute, private data : DataService) {
  }

  ngOnInit() {

      this.data.currentMessage.subscribe(message => this.message = message);
  }

}
