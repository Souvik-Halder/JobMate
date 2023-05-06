const mongoose=require('mongoose');


const jobApplicationSchema=mongoose.Schema({
    jobId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    companyId:{
        type: mongoose.Schema.ObjectId,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    resume:{
type:String,
required:true
    },
    applicantId:{
        type:mongoose.Schema.ObjectId,
        required:true
    },
    isAccept:{
        type:String,
        default:"pending"
    },
    phone:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    institute:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true,
    },
    confirmEmail:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    confirmPhone:{
        type:String,
        required:true,
    },
    linkedinProfileUrl:{
        type:String,
        required:true,
    },
    githubProfileUrl:{
        type:String,
        required:true
    },
    portfolioUrl:{
        type:String,
        required:true
    }
})

const jobApplication=mongoose.model('jobapplication',jobApplicationSchema);
 module.exports=jobApplication;