const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Post=require("./backend/models/post.model")
const app=express()
app.use(express.json());
app.use(cors('*'))


mongoose.connect("mongodb+srv://Achrefs16:94592577Ach@cluster0.1jbkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('Connected!'));
 


  app.get('/post', async (req, res) => {

 
    const posts = await Post.find();
    console.log(posts);
    
    res.status(200).json(posts);
  
});


app.get('/post/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }
    res.status(200).json(post);
  
});

app.listen(3000,()=>{
    console.log("server is running");
    
})