import { Component, OnInit } from '@angular/core';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})

export class UpdateComponent implements OnInit {
    public students = {
        Student_Name: '',
        Student_DOB: '',
        Student_Address: '',
    }

    constructor (
        private updateService: UpdateService,
    ) { }

    ngOnInit() {
    }
    GpUpdate() {
        this.updateService.GpUpdate(this.students).subscribe(data => {
            this.students.Student_Name = ''
 	 	this.students.Student_DOB = ''
 	 	this.students.Student_Address = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}