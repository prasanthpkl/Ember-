// app/routes/index.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  model() {
    const schemes = [
      {
        id: '1',
        type: 'scheme',
        attributes: {
          name: 'Pradhan Mantri Awas Yojana (PMAY)',
          description:
            'Provides affordable housing for urban and rural poor through interest subsidies on home loans.',
          eligibility:
            'Families with income < ₹6 lakh/year, no pucca house owned by any family member.',
        },
      },
      {
        id: '2',
        type: 'scheme',
        attributes: {
          name: 'Skill India Mission',
          description:
            'Free skill development and vocational training programs certified by NSDC and other bodies.',
          eligibility: 'Unemployed youth aged 18–35 with no formal training.',
        },
      },
      {
        id: '3',
        type: 'scheme',
        attributes: {
          name: 'Ayushman Bharat Yojana',
          description:
            'Provides health insurance coverage of ₹5 lakh per family per year for secondary and tertiary hospitalization.',
          eligibility:
            'Families listed in SECC 2011 database and economically vulnerable groups.',
        },
      },
      {
        id: '4',
        type: 'scheme',
        attributes: {
          name: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
          description:
            'Ensures access to financial services such as banking, insurance, and pension with zero balance accounts.',
          eligibility:
            'Indian citizens aged 10+ with no existing bank account.',
        },
      },
      {
        id: '5',
        type: 'scheme',
        attributes: {
          name: 'Startup India Scheme',
          description:
            'Promotes startups through tax benefits, funding support, and simplified compliance.',
          eligibility:
            'Newly registered companies with innovation or technology-based products/services.',
        },
      },
      {
        id: '6',
        type: 'scheme',
        attributes: {
          name: 'Stand-Up India Scheme',
          description:
            'Provides bank loans from ₹10 lakh to ₹1 crore to SC/ST and women entrepreneurs.',
          eligibility:
            'SC/ST or women entrepreneurs aged 18+, starting a new enterprise.',
        },
      },
      {
        id: '7',
        type: 'scheme',
        attributes: {
          name: 'Pradhan Mantri Ujjwala Yojana',
          description:
            'Provides free LPG connections to women from BPL households to ensure clean cooking fuel.',
          eligibility:
            'Women from BPL families with no existing LPG connection.',
        },
      },
      {
        id: '8',
        type: 'scheme',
        attributes: {
          name: 'Digital India Mission',
          description:
            'Aims to transform India into a digitally empowered society and knowledge economy.',
          eligibility:
            'Open to all citizens; benefits vary by digital service or initiative.',
        },
      },
      {
        id: '9',
        type: 'scheme',
        attributes: {
          name: 'Sukanya Samriddhi Yojana',
          description:
            'Savings scheme for girl children offering high interest and tax benefits.',
          eligibility:
            'Parents or guardians of girl children below 10 years of age.',
        },
      },
      {
        id: '10',
        type: 'scheme',
        attributes: {
          name: 'National Pension Scheme (NPS)',
          description:
            'Voluntary retirement savings scheme to provide post-retirement income through market-based returns.',
          eligibility:
            'Indian citizens aged 18–65 years, including private sector and self-employed.',
        },
      },
    ];

    schemes.forEach((scheme) => {
      this.store.push({ data: scheme });
    });

    return this.store.peekAll('scheme');
  }
}
