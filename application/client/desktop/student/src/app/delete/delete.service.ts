import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class DeleteService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpDelete(studentsId): Observable<any> {
        return this.http.delete(this.sharedService.DESKTOP_API + '/students/' + studentsId);
    }
}