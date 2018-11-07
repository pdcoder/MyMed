export class AppError{
  message : string;
  constructor(public originalerror?: any){
this.message = originalerror.error.message;
  }
}
