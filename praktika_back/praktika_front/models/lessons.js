// models/lesson.js

const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  sections: [
    {
      type: {
        type: String,
        enum: ['text', 'quiz', 'codeExecutor'],
        required: true
      },
      content: String, // for text sections
      questions: [
        {
          question: String,
          options: [String],
          answer: String
        }
      ], // for quiz sections
      assignment: String, // for codeExecutor sections
      inputData: String,
      outputData: String,
      example: String,
      testCases: [
        { input: String, output: String }
      ]
    }
  ]
});

module.exports = mongoose.model('Lesson', lessonSchema);
