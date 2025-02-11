import React from 'react';
import Navbar from '../components/Navbar';
import Card from './components/Card';
import GradientBackground from '../components/GradientBackground';

const Dashboard = () => {
  return (
    <GradientBackground>
      <Navbar />
      <div className="text-center text-white text-3xl font-bold mt-6">DASHBOARD</div>
      <div className="flex justify-center mt-6 space-x-6">
        <Card title="Recommended Coffee" text="Recommended Coffee will appear here, based on quiz results." />
        <Card title="Nearby Coffee Shops" text="With the help of an API, some shops will appear here." />
        <Card title="Daily Coffee Suggestion" text="With the help of an API, some coffee suggestions will appear here." />
      </div>
    </GradientBackground>
  );
};

export default Dashboard;