
exports.seed = async function(knex) {
  await knex("cars").truncate()
  await knex("cars").insert([
    { VIN: "5YJSA1DG9DFP14705", make: "Toyota", model: "Corolla", mileage: 36000,transmission: "Automatic", title: "Clean"},
    { VIN: "4TKSA2DG9DFP14704", make: "Honda", model: "CR-V", mileage: 126000,transmission: "Manual", title: "Salvage"},
    { VIN: "3YLSS1DG9DFP14703", make: "Nissan", model: "Altima", mileage: 57000,transmission: "Automatic", title: "Clean"},

  ])
};

