// Writing the Schema in terms of MongoDB
// Model needs two collections
    // 1. Users/Visitors (authorized or unauthorized)
    // 2. Case Data
// We need authorized user to login in to our application and do necessary operations.
// We need to protect the application with middlewares

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true,
        },
    password: {
        type: String,
        required: true,
        minLength: 6,
        },
    name:{
        type:String,
        required:true,
        max:255
    },
    image:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
},{timestamps:true}, {versionKey:false})


const caseSchema = new mongoose.Schema({
    case_number: {
        type: String,
        required: true,
        unique:true,
        },
    branch: {
        type: String,
        required: true,
        },
    reporting_method:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    sub_category:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    nature:{
        type:String,
        required:true
    },
    manager:{
        type:String,
        required:true
    },
    reporter:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
},{timestamps:true}, {versionKey:false})




