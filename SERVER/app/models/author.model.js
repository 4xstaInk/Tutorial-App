module.exports = (sequelize, DataType)=>{
    const Author = sequelize.define("author", {
        fullname: {
            type: DataType.STRING
        },
        date_of_birth: {
            type: DataType.DATE
        },
        email: {
            type: DataType.STRING,
            
            validation:{
                notNull: true,
                unique:true
            }
        },
        password: {
            type: DataType.STRING,
            notNull: true,
            min: 8
        },
        quote: {
           type: DataType.STRING
        }
    }); 

    return Author;
} 