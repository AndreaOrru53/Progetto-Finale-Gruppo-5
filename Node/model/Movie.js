import { Sequelize } from "sequelize"; 
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Movie = db.define('movies', {
  movieName: {
    type: DataTypes.STRING
  },
  movieType: {
    type: DataTypes.STRING
  },
  movieDate: {
    type: DataTypes.Double
  }
}, {
  freezeTableName: true
});
 
export default Movie;