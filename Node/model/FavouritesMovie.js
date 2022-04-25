import { Sequelize } from "sequelize"; 
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const FavouriteMovie = db.define('favmovie', {
  movie_Id: {
    type: DataTypes.INTEGER
  },
  user_Id: {
    type: DataTypes.INTEGER
  }
  
}, {
  freezeTableName: true
});
 
export default FavouriteMovie;