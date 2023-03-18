const Application = require('./framework/Application')
const useRouter = require('./src/user-router')
const jsonParser = require('./framework/parsJson')
const parsUrl = require('./framework/parsUrl')
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080
const app = new Application()

app.use(jsonParser)
app.use(parsUrl('http://localhost:8080'))
app.addRouter(useRouter)

const start = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://aloyanxachik9:${process.env.MONGO_PASS}@cluster0.uph6rwn.mongodb.net/?retryWrites=true&w=majority`
        )
        app.listen(PORT,() => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()