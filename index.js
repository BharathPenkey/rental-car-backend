// require("dotenv").config() 

// const express = require("express")
// const mongoose = require("mongoose") 
// const userRouter = require('./routes/user')
// const adminRouter = require('./routes/admin')
// const  carRouter = require('./routes/Car')

// //express app
// const app = express()


// //middleware
// app.use(express.json())
// app.use((req, res, next) => {
//     console.log(req.path,req.method)
//     next()
// })

// //connnect to db
// mongoose.connect(process.env.MONGO_URI)
// .then(() => {
//     app.listen(process.env.PORT, () => {       
//         console.log("successfully connected to db and listening to the server on port 4000 !!!")
//     })
// })
// .catch((error) => {
//     console.log(error)
// })

// app.use('/carRental/car',carRouter)
// app.use('/carRental/admin' ,adminRouter)
// app.use('/carRental/user' ,userRouter)


// require("dotenv").config() 

const express = require("express")
const app = express()
const cors = require('cors');
app.use(cors());
const mongoose = require("mongoose") 
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
const  carRouter = require('./routes/Car')

//express app
// const app = express()


//middleware
// app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path,req.method)
    next()
})
// const URI ="mongodb+srv://paruljaiswal:CAR-RENTAL@cluster0.zxkznbi.mongodb.net/?retryWrites=true&w=majority";
const URI="mongodb+srv://bharath:bharath@cluster0.w1gr51t.mongodb.net/car-rental?retryWrites=true&w=majority"

//connect to db
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
    app.listen(5000, () => {       
        console.log("successfully connected to db and listening to the server on port " + 5000 + "!!!")
    })
})
.catch((error) => {
    console.log(error)
})

app.use('/carRental/car',carRouter)
app.use('/carRental/admin' ,adminRouter)

app.use('/carRental/user' ,userRouter)







