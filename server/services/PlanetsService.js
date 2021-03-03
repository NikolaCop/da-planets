import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
  async create(body) {
    return await dbContext.Planet.create(body)
  }
  async find(query = {}) {
    return await dbContext.Planet.find(query);
  }
  async findById(id) {
        let planets = await dbContext.Planet.findById(id);
        if (!planets) {
          throw new BadRequest("Invalid Id");
        }
        return planets;
  }
}

export const planetsService = new PlanetsService();