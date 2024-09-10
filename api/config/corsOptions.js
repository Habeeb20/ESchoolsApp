import allowOrigins from "./allowOrigin.js"
const corsOptions = {
    origin:(origin, callback) => {
        if(allowOrigins.indexOf(origin) !== -1 ||  !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    Credential:true,
    OptionsSuccessStatus: 200
}


export default corsOptions