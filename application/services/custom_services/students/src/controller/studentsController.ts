import { Request, Response } from 'express';
import { studentsService } from '../service/studentsService';
import { CustomLogger } from '../config/Logger'
let students = new studentsService();

export class studentsController {
    
    constructor() { }
    
    public GpSearch(req: Request, res: Response) {
students.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
students.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
students.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: GpGetAllValues');
    })}
public GpDelete(req: Request, res: Response) {
students.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: GpDelete');
    })}
public GpCreate(req: Request, res: Response) {
students.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: GpCreate');
    })}


}