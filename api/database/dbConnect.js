import mongoose from "mongoose"

const connectDb = async() => {
    try {
        const connect=await mongoose.connect("mongodb+srv://Habeeb:Ademola1234@habeeb.pal57xa.mongodb.net/Eschools?retryWrites=true&w=majority", {
           
        })
        if (connect) {
            console.log("you have successfully connected to the DB")
        } else {
            console.log("there is an error")
            
        }
    } catch (error) {
        console.log(error)
        
    }
}



export default connectDb