import React from 'react';
import { Link } from 'react-router-dom';
import Overview from '../components/Overview';
import ManagementTeam from '../components/ManagementTeam';
import ProductAdvantages from '../components/MakeInIndia';

export default function About() {
  return ( <div>

    <section>
    <div>
      <Overview />
    </div>
    </section>

    <section>
       <div>
        <ManagementTeam />
      </div>
    </section>
    <section>
      <div>
        <ProductAdvantages />
      </div> 
    </section>
    
  </div>
  )
}