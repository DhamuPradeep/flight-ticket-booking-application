import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  startday: {
    type: Date,
    required: true,
  },
  reachday: {
     type: Date,
    required: true,
  },
  starttime:{
    type:String,
    required:true
  },
  reachtime:{
    type:String,
    required:true
  },
  availableSeats: {
    type: [Number],
    default:function(){
      const seat = []
      for(let i = 1;i<=60;i++){
        seat.push(i)
      }
      return seat
    }
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Flight", FlightSchema)