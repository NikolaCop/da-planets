
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;

const Specie = new Schema(
    {
        name: { type: String, required: true },
        galaxy: { type: ObjectId, ref: "Galaxy", required: true },
        star: { type: ObjectId, ref: "Star", required: true },
        planet: { type: ObjectId, ref: "Planet", required: true },
        // moon: { type: ObjectId, ref: "Moon", required: true },
      
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Specie;