// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json()); // To parse JSON body from POST requests

let users = [
  {
    id: '1',
    name: 'Prasanth',
    email: 'prasanthK@gmail.com',
    mobile: '8903212575',
    password: '123',
  },
  {
    id: '2',
    name: 'Sham',
    email: 'sham@gmail.com',
    mobile: '9944556677',
    password: '123',
  },
];

let applications = [
  {
    id: '1',
    name: 'Prasanth',
    email: 'prasanthK@gmail.com',
    mobile: '8903212575',
    scheme: 'scheme1',
    status: "pending",
    userId: 1,
  },
  {
    id: '2',
    name: 'Sham',
    email: 'sham@gmail.com',
    mobile: '9944556677',
    scheme: 'scheme1',
    status: "pending",
    userId: 2,
  },
];

let schemes = [
  {
    id: '1',
    name: 'Free Education Scheme',
    description: 'Provides free education to underprivileged students.',
    eligibility: 'Students from low-income families',
  },
  {
    id: '2',
    name: 'Startup Subsidy Program',
    description: 'Offers financial support to early-stage startups.',
    eligibility: 'Entrepreneurs aged 18–35',
  },
  {
    id: '3',
    name: 'Women Empowerment Grant',
    description: 'Provides business grants to women entrepreneurs.',
    eligibility: 'Women above 21 years with a business plan',
  },
  {
    id: '4',
    name: 'Senior Citizen Pension Yojana',
    description: 'Monthly pension for senior citizens.',
    eligibility: 'People aged 60 and above',
  },
  {
    id: '5',
    name: 'Skill Development Scheme',
    description: 'Offers free technical training for unemployed youth.',
    eligibility: 'Unemployed youth aged 18–30',
  },
  {
    id: '6',
    name: 'Farmer Support Scheme',
    description: 'Provides subsidies for seeds and fertilizers.',
    eligibility: 'Registered small and marginal farmers',
  },
  {
    id: '7',
    name: 'Healthcare Insurance Program',
    description: 'Free health insurance for BPL families.',
    eligibility: 'Families below the poverty line',
  },
  {
    id: '8',
    name: 'Digital India Training',
    description: 'Basic digital literacy training for rural residents.',
    eligibility: 'Residents of rural areas above 14 years',
  },
  {
    id: '9',
    name: 'Student Laptop Scheme',
    description: 'Free laptops for top-performing government school students.',
    eligibility: 'Top 10% students in Class 12 from govt schools',
  },
  {
    id: '10',
    name: 'Housing for All',
    description: 'Affordable housing scheme for economically weaker sections.',
    eligibility: 'Families with annual income below ₹3 lakhs',
  },
];

// GET all schemes
app.get('/schemes', (req, res) => {
  res.json(schemes);
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/applications', (req, res) => {
  res.json(applications);
});

// POST a new scheme
app.post('/schemes', (req, res) => {
  const { name, description, eligibility } = req.body;

  if (!name || !description || !eligibility) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const newScheme = {
    id: String(schemes.length + 1),
    name,
    description,
    eligibility,
  };

  schemes.push(newScheme);
  res.status(201).json(newScheme);
});

app.post('/applications', (req, res) => {
  const { name, email, mobile, scheme, userId } = req.body;

  if (!name || !email || !mobile || !scheme || !userId) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const newApplication = {
    id: String(applications.length + 1),
    name,
    email,
    mobile,
    scheme,
    status: 'pending',
    userId,
  };

  applications.push(newApplication);
  res.status(201).json(newApplication);
});

app.put('/applications/:id', (req, res) => {
  const appId = req.params.id;
  const { status } = req.body;

  const application = applications.find((app) => app.id === appId);
  if (!application) {
    return res.status(404).json({ error: 'Application not found.' });
  }

  application.status = status;
  res.status(200).json(application);
});


app.post('/users', (req, res) => {
  const { name, email, mobile, password } = req.body;

  if (!name || !email || !mobile || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const newUser = {
    id: String(users.length + 1),
    name,
    email,
    mobile,
    password,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`✅ API Server running at http://localhost:${PORT}/schemes`);
});
