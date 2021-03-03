  
import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxyService {
  async create(body) {
    return await dbContext.Galaxy.create(body)
  }
  async find(query = {}) {
    return await dbContext.Galaxy.find(query);
  }
  async findById(id) {
        let galaxy = await dbContext.Galaxy.findById(id);
        if (!galaxy) {
          throw new BadRequest("Invalid Id");
        }
        return galaxy;
  }
}

export const galaxyService = new GalaxyService();