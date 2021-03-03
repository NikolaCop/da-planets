import express from "express";
import BaseController from "../utils/BaseController";
import { galaxyService } from "../services/GalaxyService";
import { planetsService } from "../services/PlanetsService";
import { moonsService } from "../services/MoonsService";
import { speciesService } from "../services/SpeciesService";
import { starsService } from "../services/StarsService";

export class StarsController extends BaseController {
    constructor() {
        super("api/stars");
        this.router
        .get("", this.getAll)
        .get("/:id/planet", this.getAllPlanetsByGalaxyId)
        .get("/:id/moon", this.getAllMoonsByGalaxyId)
        .get("/:id/species", this.getAllSpeciesByGalaxyId)
        .post("", this.create)
    }

async create(req, res, next) {
    try {
        res.send(201, await starsService.create(req.body));
    } catch (error) {
        next(error);
    }
}

 async getAll(req, res, next) {
    try {
      res.send(await starsService.find(req.query));
    } catch (error) {
      next(error);
    }
  }

async getAllPlanetsByGalaxyId(req, res, next){
    try {
     res.send(await planetsService.find({ star: req.params.id }));
   } catch (error) {
     next(error);
   }
}

async getAllMoonsByGalaxyId(req, res, next){
    try {
     res.send(await moonsService.find({ star: req.params.id }));
   } catch (error) {
     next(error);
   }
}

async getAllSpeciesByGalaxyId(req, res, next){
    try {
     res.send(await speciesService.find({ star: req.params.id }));
   } catch (error) {
     next(error);
   }
}

}