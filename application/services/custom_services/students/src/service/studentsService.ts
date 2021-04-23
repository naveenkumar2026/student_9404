import { Request, Response } from 'express';
import {studentsDao} from '../dao/studentsDao';
import { CustomLogger } from '../config/Logger'
let students = new studentsDao();

export class studentsService {
    
    constructor() { }
    
    public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: GpSearch')
     const  studentsData = req.query;
     students.GpSearch(studentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: GpUpdate')
     const  studentsData = req.body;
     students.GpUpdate(studentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: GpGetAllValues')
     
     students.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: GpDelete')
     const  studentsId = req.params.id;
     students.GpDelete(studentsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: GpDelete')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: GpCreate')
     const  studentsData = req.body;
     students.GpCreate(studentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: GpCreate')
         callback(response);
         });
    }


}