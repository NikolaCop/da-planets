import express from "express";
import BaseController from "../utils/BaseController";
import { galaxyService } from "../services/GalaxyService";
import { starsService } from "../services/StarsService";
import { planetsService } from "../services/PlanetsService";
import { moonsService } from "../services/MoonsService";
import { speciesService } from "../services/SpeciesService";

export class GalaxyController extends BaseController {
constructor() {
super("api/galaxy");
this.router
.get("", this.getAll)
.get("/:id/star", this.getAllStarsByGalaxyId)
.get("/:id/planet", this.getAllPlanetsByGalaxyId)
.get("/:id/moon", this.getAllMoonsByGalaxyId)
.get("/:id/species", this.getAllSpeciesByGalaxyId)
.post("", this.create)
}

  async getAll(req, res, next) {
    try {
      res.send(await galaxyService.find(req.query));
    } catch (error) {
      next(error);
    }
  }
async create(req, res, next) {
    try {
        res.send(201, await galaxyService.create(req.body));
    } catch (error) {
        next(error);
    }
}
async getAllStarsByGalaxyId(req, res, next){
    try {
     res.send(await starsService.find({ galaxy: req.params.id }));
   } catch (error) {
     next(error);
   }
}
async getAllPlanetsByGalaxyId(req, res, next){
    try {
     res.send(await planetsService.find({ galaxy: req.params.id }));
   } catch (error) {
     next(error);
   }
}
async getAllMoonsByGalaxyId(req, res, next){
    try {
     res.send(await moonsService.find({ galaxy: req.params.id }));
   } catch (error) {
     next(error);
   }
}
async getAllSpeciesByGalaxyId(req, res, next){
    try {
     res.send(await speciesService.find({ galaxy: req.params.id }));
   } catch (error) {
     next(error);
   }
}


}