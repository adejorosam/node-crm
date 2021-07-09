import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const app = express();
const PORT = 4000;

//mongoose connection

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
}


connectDB();

//bodyparse setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
routes(app);
// Serving static files
app.use(express.static('public'));
app.get('/', (req, res) =>
res.send(`Node and express server running on ${PORT}`));

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
