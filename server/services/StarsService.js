import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
  async create(body) {
    return await dbContext.Star.create(body)
  }
  async find(query = {}) {
    return await dbContext.Star.find(query).populate("galaxy", "name");;
  }
  async findById(id) {
        let stars = await dbContext.Star.findById(id);
        if (!stars) {
          throw new BadRequest("Invalid Id");
        }
        return stars;
  }
}

export const starsService = new StarsService();