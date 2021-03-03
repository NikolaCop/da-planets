import express from "express";
import BaseController from "../utils/BaseController";
import { moonsService } from "../services/MoonsService";
import { speciesService } from "../services/SpeciesService";

export class MoonsController extends BaseController {
    constructor() {
        super("api/moons");
        this.router
        .get("", this.getAll)
        .get("/:id/species", this.getAllSpeciesByGalaxyId)
        .post("", this.create)
    }
async create(req, res, next) {
    try {
        res.send(201, await moonsService.create(req.body));
    } catch (error) {
        next(error);
    }
}

 async getAll(req, res, next) {
    try {
      res.send(await moonsService.find(req.query));
    } catch (error) {
      next(error);
    }
  }

async getAllSpeciesByGalaxyId(req, res, next){
    try {
     res.send(await speciesService.find({ moons: req.params.id }));
   } catch (error) {
     next(error);
   }
}

}