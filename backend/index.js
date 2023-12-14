import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './routes/email.route.js'
import products from './routes/product.route.js'
import sett from "./routes/setting.route.js"
import dotenv from 'dotenv'


dotenv.config({path:'./config.env'})
const app = express();
const PORT = 1213;

app.use(bodyParser.json());

app.use('/api', products);
app.use('/api', router);
app.use('/api', sett);


mongoose.connect("mongodb+srv://zultaifhassan110:12345@cluster0.tdrxjpi.mongodb.net/Ibexstore").then(() => {
    console.log("DB Connected")
});


app.listen(PORT, () => {
    console.log(`Port is listening on ${PORT}`);
})