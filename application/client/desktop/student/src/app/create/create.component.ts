import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {
    public students = {
        Student_Name: '',
        Student_DOB: '',
        Student_Address: '',
    }

    constructor (
        private createService: CreateService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params.id;
 	 	this.GpGetNounById();
 	 	});
    }
    GpCreate() {
        this.createService.GpCreate(this.students).subscribe(data => {
            this.students.Student_Name = ''
 	 	this.students.Student_DOB = ''
 	 	this.students.Student_Address = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}