import { Request, Response, NextFunction } from "express";
import { studentsController } from '../controller/studentsController';


export class Routes {
    private students: studentsController = new studentsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/students/get/search').get(this.students.GpSearch);
app.route('/students').put(this.students.GpUpdate);
app.route('/students').get(this.students.GpGetAllValues);
app.route('/students/:id').delete(this.students.GpDelete);
app.route('/students').post(this.students.GpCreate);
     }

}