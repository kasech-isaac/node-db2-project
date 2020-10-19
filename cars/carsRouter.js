const express = require("express")
const db = require("../data/config")

const router = express.Router()

// ******READ******

router.get("/cars", async (req, res, next) => {
	try {
		res.json(await db("cars"))
	} catch(err) {
		next(err)
	}
})

// ******READ BY ID******
router.get("/cars/:id", async (req, res, next) => {
	try {
		const { id } = req.params
		const cars = await db("cars").where({ id }).first()
		
		res.json(cars)
	} catch(err) {
		next(err)
	}
})

// ******CREATE A NEW ONE******
router.post("/cars", async (req, res, next) => {
	try {
const carInfo={
    VIN:req.body.VIN,
    make:req.body.make,
    model:req.body.model,
    mileage:req.body.mileage,
    title:req.body.title,
    transmission:req.body.transmission,
}
if(!carInfo.VIN || !carInfo.make || !carInfo.model  || !carInfo.mileage  || !carInfo.title  || !carInfo.transmission){
    return res.status(400).json({message:"missing reqired field",})
    }
		const [id] = await db.insert(carInfo).into("cars")
        res.status(201).json({id})
	} catch(err) {
		next(err)
	}
})

module.exports = router

