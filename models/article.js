const mongoose = require('mongoose');
// Article Schema
const ArticleSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  author:{
    type: String
  },
  choice1:{
    title:
    {
      type: String,
      required: true
    },
    next_id:
    {
      type: Number
    },
    weight:
    {
      type: Number,
      required:true
    }
  },
  choice2:{
    title:
    {
      type: String,
      required: true
    },
    next_id:
    {
      type: Number
    },
    weight:
    {
      type: Number,
      required:true
    }
  },
  choice3:{
    title:
    {
      type: String
    },
    next_id:
    {
      type: Number
    },
    weight:
    {
      type: Number
    }
  },
  answer:{
    type: Number,
    required: true
  },
  weight:{
    type: Number,
    required: true
  },
  category:{
    type: Number,
    required: true
  },
  section:{
    type: Number
  }
});



const Article = module.exports = mongoose.model('Article', ArticleSchema);
