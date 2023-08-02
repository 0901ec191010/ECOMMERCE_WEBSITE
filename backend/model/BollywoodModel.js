const mongoose = require('mongoose');
// const bcrypt = require('bcrypt')
const movieSchema = mongoose.Schema(
    {
        moviename: { type: String },
        movieyear: { type: Number },
        moviephoto:{
            public_id:{
                type:String,
                require:false
            } ,
            url:{
                type:String ,
                require:false
            }
    
        }
    //     pic: {
    //         type: String,
    //         // require: true,
    //         default: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
    //     },
    // },
    // { timestamps: true }
    }
);

// userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// userSchema.pre('save', async function (next) {
//     if (!this.isModified) {
//         next()
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt)
// })
const Bollywood = mongoose.model("Bollywood", movieSchema);
module.exports = Bollywood;