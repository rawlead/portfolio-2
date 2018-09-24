import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Projects from '../components/Projects';
import Education from '../components/Education';

const Index = () => (
  <Layout>
    <Hero />
    <Info />
    <Education />
    <Projects />
  </Layout>
);

export default Index;
