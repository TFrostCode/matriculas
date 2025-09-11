import React from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { Card } from '../../components/ui/card';

const Overview: React.FC = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Total Alumnos</h3>
          <p className="text-4xl font-bold">0</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Total Cursos</h3>
          <p className="text-4xl font-bold">0</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Matrículas Activas</h3>
          <p className="text-4xl font-bold">0</p>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
