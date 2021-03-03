import express from "express";
import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";
import { moonsService } from "../services/MoonsService";
import { speciesService } from "../services/SpeciesService";

export class PlanetsController extends BaseController {
    constructor() {
        super("api/planets");
        this.router
        .get("", this.getAll)
        .get("/:id/moon", this.getAllMoonsByGalaxyId)
        .get("/:id/species", this.getAllSpeciesByGalaxyId)
        .post("", this.create)
    }

async create(req, res, next) {
    try {
        res.send(201, await planetsService.create(req.body));
    } catch (error) {
        next(error);
    }
}
 async getAll(req, res, next) {
    try {
      res.send(await planetsService.find(req.query));
    } catch (error) {
      next(error);
    }
  }


async getAllMoonsByGalaxyId(req, res, next){
    try {
     res.send(await moonsService.find({ planet: req.params.id }));
   } catch (error) {
     next(error);
   }
}

async getAllSpeciesByGalaxyId(req, res, next){
    try {
     res.send(await speciesService.find({ planet: req.params.id }));
   } catch (error) {
     next(error);
   }
}

}