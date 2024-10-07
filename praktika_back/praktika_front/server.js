// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const QuizSchema = new mongoose.Schema({
  question: {
      type: String,
      required: true
  },
  options: {
      type: [String],
      required: true
  },
  answer: {
      type: String,
      required: true
  }
});

// Схема для компонента CodeExecutor
const TestSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true
  },
  expectedOutput: {
    type: String,
    required: true
  }
});

// Схема для компонента CodeExecutor
const CodeExecutorSchema = new mongoose.Schema({
  test: [{
    type: TestSchema,
    required: false
  }],
  taskDescription: {
    type: String,
    required: false
  },
  taskInputFormat: {
    type: String,
    required: false
  },
  taskOutputFormat: {
    type: String,
    required: false
  },
  taskExample: {
    input: {
      type: String,
      required: false
    },
    output: {
      type: String,
      required: false
    }
  }
});

// Схема для урока
const LessonSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true
  },
  content: [{
    type: {
      type: String,
      enum: ['text', 'list', 'code', 'subtitle', 'quizzes', 'codeExecutor', 'image'], // Возможные типы элементов в content
      required: true
    },
    text: {
      type: String,
      required: false
    },
    list: {
      items: {
        type: [String],
        required: false
      }
    },
    code: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    },
    quizzes: {
      type: [QuizSchema],
      default: [],
      required: false
    },
    codeExecutor: {
      type: CodeExecutorSchema,
      required: false
    },
    image: {
      path: {
        type: String,
        required: false
      },
      caption: {
        type: String,
        required: false
      }
    }
  }]
});

const Lesson = mongoose.model('Lesson', LessonSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = './uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.use(express.static('uploads'));


app.post('/api/lessons', async (req, res) => {
  try {
    const lesson = new Lesson({
      title: req.body.title,
      content: req.body.content,
    });
    await lesson.save();
    res.status(201).json(lesson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/lessons', async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/lessons/:id', async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/lessons/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const lesson = await Lesson.findByIdAndDelete(id);
    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }
    res.json({ message: 'Lesson deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.json({ filePath: `/${req.file.filename}` });
});


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
