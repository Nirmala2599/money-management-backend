const mongoose =require("mongoose");

const incomeSchema = mongoose.Schema({
     roll:{
        type:String,
        required: true,
        unique:true,
    },
    title:{
        type:String,
        required: true
    },
  amount:{
        type:String,
        required: true
    },
    type: {
        type: String,
        default:"income"
    },
   
        category:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    },
    
   
},{timestamps: true}
);
var incomedata = mongoose.model('incomedata',incomeSchema);
module.exports=incomedata;