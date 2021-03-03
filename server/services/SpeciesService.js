  
import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciesService {
  async create(body) {
    return await dbContext.Specie.create(body)
  }
  async find(query = {}) {
    return await dbContext.Specie.find(query);
  }
  async findById(id) {
        let species = await dbContext.Specie.findById(id);
        if (!species) {
          throw new BadRequest("Invalid Id");
        }
        return species;
  }
}

export const speciesService = new SpeciesService();