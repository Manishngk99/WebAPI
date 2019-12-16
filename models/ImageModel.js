var db = require('../dbConfig/dbConfig.js')

var image = db.sequelize.define('image', {
	//attributes
	id: {
		type: db.Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	image: {
		type: db.Sequelize.TEXT,
		allowNull: false
	}
},
	{

		freezeTableName: true,
		tableName: 'image',
		paranoid: true

	}
)

image.sync({ force: false })
	.then(function () {

	})
	.catch(function (err) {

		console.log(err)

	})

module.exports = {
	image
};