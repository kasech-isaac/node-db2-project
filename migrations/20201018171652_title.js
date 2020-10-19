
exports.up = async function(knex) {
    await knex.schema.alterTable("cars", (table) => {
        table.text("title")
		table.text("transmission")
	})
}


exports.down = async function(knex) {
    await knex.schema.alterTable("cars", (table) => {
        table.dropColumn("title")
        table.dropColumn("transmission")
	})
};
