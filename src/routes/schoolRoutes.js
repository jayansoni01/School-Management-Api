import { Router } from "express";
import validateSchool from "../middlewares/validateSchool.js";
import { addSchoolController, listSchoolsController } from "../controllers/schoolController.js";

const schoolRouter = Router();

schoolRouter.get("/listSchools",listSchoolsController);
schoolRouter.post("/addSchool",validateSchool,addSchoolController);

export default schoolRouter;