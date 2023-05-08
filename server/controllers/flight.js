import Flight from "../models/flights.js";

export const addFlight = async (req, res, next) => {
  const newFlight = new Flight(req.body);

  try {
    const savedFlight = await newFlight.save();
    res.status(200).json(savedFlight);
  } catch (err) {
    next(err);
  }
};

export const updateFlight = async (req, res, next) => {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedFlight);
  } catch (err) {
    next(err);
  }
};

export const deleteFlight = async (req, res, next) => {
  try {
    await Flight.findByIdAndDelete(req.params.id);
    res.status(200).json("Flight has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getFlight = async (req, res, next) => {
  try {
    const flight = await Flight.findById(req.params.id);
    res.status(200).json(flight);
  } catch (err) {
    next(err);
  }
};

export const getFlights = async (req, res, next) => {
  try {
    const Flights = await Flight.find();
    res.status(200).json(Flights);
  } catch (err) {
    next(err);
  }
};

export const bookFlightSeats = async(req,res,next) => {

  const flightId = req.params.id
  const bookedseat = req.params.seatid
  try{
    await Flight.findByIdAndUpdate(flightId,{
      $pull: {availableSeats:bookedseat}
    })
    res.status(200).send("Seat booked successfully")
  }
  catch(err){
    next(err);
  }
}

export const getflightquery = async(req,res,next) => {
  const fromdate = req.params.from;
  const todate = req.params.to;
 
  try{
    const list = await Flight.find({
      "startday":{"$gte":new Date(fromdate),"$lte":new Date(todate)},
    })
    res.status(200).json(list)
  }
  catch(err){
    next(err)
  }
}

export const availabeSeats = async(req,res,next) => {
  try{
    const flight = await Flight.findById(req.params.id);
    res.status(200).json(flight.availableSeats);
  }catch(err){
    next(err)
  }
}