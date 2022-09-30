import { HttpResponse,HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from '../../bookuploadService/upload-file.service';

@Component({
  selector: 'app-upload-file-component',
  templateUrl: './upload-file-component.component.html',
  styleUrls: ['./upload-file-component.component.css']
})
export class UploadFileComponentComponent implements OnInit {

  autname:string="";
  selectedFiles:any= FileList;
  currentFile:any=File;
  progress = 0;
  message = '';
  fileInfos!: Observable<any>;
  constructor(private uploadService: UploadFileService) { }

  ngOnInit(): void {
  this.fileInfos = this.uploadService.getFiles();
  console.log(this.fileInfos.forEach.toString);
  this.fileInfos.forEach(function(value){
    console.log(value)
  })
  
}


selectFile(event:any) {
  this.selectedFiles = event.target.files;
}

upload() {
  this.progress = 0;
  this.currentFile = this.selectedFiles.item(0);
  this.uploadService.upload(this.currentFile,this.autname).subscribe(
    event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded);
      } else if (event instanceof HttpResponse) {
        this.message = event.body.message;
        this.fileInfos = this.uploadService.getFiles();
      }
    },
    err => {
      this.progress = 0;
      this.message = 'Could not upload the file!';
      this.currentFile = undefined;
    });
  this.selectedFiles = undefined;
}
  }