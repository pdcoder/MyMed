import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {UploadService} from "../upload.service";
import {ProfileserviceService} from "../profile/profileservice.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {FileUploader} from "ng2-file-upload";
import jwt_decode from 'jwt-decode' ;
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }
  public uploader: FileUploader;
  private hasDragOver = false;

  @Input()
  private editmode = false;

  @Input()
  private url :any = {};

  @Output()
  private urlChange = new EventEmitter();

  constructor(private uploadService: UploadService, private spinnerService: Ng4LoadingSpinnerService) {
    const token  =  localStorage.getItem('token');
    let tokenInfo = this.getDecodedAccessToken(token);
    let id = tokenInfo.userId;
    this.uploader = new FileUploader({
      url: `http://localhost:4200/api/post/${id}`,
      disableMultipart: false,
      autoUpload: true
    });

    this.uploadService.getFiles(id).subscribe((data) => {
      this.url = data;
      this.urlChange.emit(this.url);
    });

  }

  getDecodedAccessToken(token: string): any {
    try{
      return jwt_decode(token);
    }
    catch(Error){
      return null;
    }
  }


  ngOnInit() {

  }

  public fileOver(e: any): void {
    this.hasDragOver = e;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }




}
