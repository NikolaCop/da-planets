
import { dbContext } from "../db/DbContext";
import SpeciesPlanets from "../models/SpeciesPlanets";
import { BadRequest } from "../utils/Errors";

class SpeciesPlanetsService {
    async delete(id) {
        return await dbContext.SpeciesPlanets.findByIdAndDelete(id)
    }
    async create(body) {
        return await dbContext.SpeciesPlanets.create(body)
    }
    async find(query = {}) {
        return await dbContext.SpeciesPlanets.find(query)
    }
    async findById(id) {
        let speciesPlanets = await dbContext.SpeciesPlanets.findById(id);
        if (!speciesPlanets) {
          throw new BadRequest("Invalid Id");
        }
        return SpeciesPlanets;
    }
}

export const speciesPlanetsService = new SpeciesPlanetsService();