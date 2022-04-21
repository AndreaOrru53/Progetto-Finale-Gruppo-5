import { Sequelize } from "sequelize"; 
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const FavouriteMovie = db.define('favouritemovie', {
  movie_Id: {
    type: DataTypes.INTEGER
  },
  
}, {
  freezeTableName: true
});
 
export default FavouriteMovie;