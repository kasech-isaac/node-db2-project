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
		const [id] = await db("cars").insert(req.body)
		const newCar = await db("cars").where({id}).first()
        res.status(201).json(newCar)
	} catch(err) {
		next(err)
	}
})

module.exports = router

