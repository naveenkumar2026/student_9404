import { Component, OnInit } from '@angular/core';
import { DeleteService } from './delete.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})

export class DeleteComponent implements OnInit {
    queryId: any;
    public students = {
        Student_Name: '',
        Student_DOB: '',
        Student_Address: '',
    }

    constructor (
        private deleteService: DeleteService,
    ) { }

    ngOnInit() {
    }
    GpDelete() {
        this.deleteService.GpDelete(this.queryId).subscribe(data => {
            this.GpGetNounById();
        },
        error => {
            console.log('Error', error);
        });
    }
}