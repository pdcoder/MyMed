import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProfileserviceService} from "./profile/profileservice.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient, private spinnerService: Ng4LoadingSpinnerService) {}

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', '/api/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(id : number) {
    return this.http.get(`/api/get/${id}`);
  }

}
