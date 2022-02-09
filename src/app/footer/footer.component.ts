import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 /* fileToUpload: File | null=null;
  handleFileInput(files: FileList){
    this.fileToUpload=files.item(0);
  }

  uploadFileToActivity(){
    this.fileUploadService.postFile(this.fileToUpload).subsribe( data => {
      console.log("success")
    }, error => {
      console.log(error)
    });
  }

    postFile(fileToUpload: File): Observable<Boolean> {
      const endpoint = "src\assets\pdfFiles\1_1.pdf"
      const formData: FormData=new FormData();
      formData.append('fileKey', fileToUpload,fileToUpload.name);
      return this.httpClient
      .post(endpoint, formData, {Headers:src\app\header\header.component.html})
    }

    )
  }
  */
  constructor() { }

  ngOnInit() {
  }

}
