import {Schema, model} from "mongoose";

const querySchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  prompt: { type: String, required: true },
  response: { type: String, required: true }
},{
    timestamps: true,
    versionKey: false
})

export default model("Query", querySchema)
