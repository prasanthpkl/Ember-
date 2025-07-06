// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

const schemes = [
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

app.get('/schemes', (req, res) => {
  res.json(schemes);
});

app.listen(PORT, () => {
  console.log(`✅ API Server running at http://localhost:${PORT}/schemes`);
});
