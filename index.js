import express from 'express';
import mongoose from 'mongoose';
import requireDir from 'require-dir';
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/nodeapi");



 requireDir('./src/models');

 


app.use('/api', require('./src/routes'));

app.listen(3333);