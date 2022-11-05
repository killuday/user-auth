const mongoose = require('mongoose');

module.exports=()=>{
    const connectionParams={

        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to the database successfully")
        
    } catch (error) {
        console.log(error);
        console.log('cannot connect to the database ')
        
    }
}