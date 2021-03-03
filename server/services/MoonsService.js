  
import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService {
  async create(body) {
    return await dbContext.Moon.create(body)
  }
  async find(query = {}) {
    return await dbContext.Moon.find(query);
  }
  async findById(id) {
        let moons = await dbContext.Moon.findById(id);
        if (!moons) {
          throw new BadRequest("Invalid Id");
        }
        return moons;
  }
}

export const moonsService = new MoonsService();