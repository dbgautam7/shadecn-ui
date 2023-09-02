'use client';
import CustomAreaChart from '@/components/charts/areaChart';
import CustomBarChart from '@/components/charts/barChart';
import CustomPieChart from '@/components/charts/pieChart';
import Layout from '@/components/customUi/layout';

export default function Home() {
  return (
    <Layout>
      <main className='mx-4 my-24 overflow-y-auto'>
        <div className='grid grid-cols-3 gap-4 rounded-md border p-4 shadow-md '>
          <CustomBarChart />
          <CustomAreaChart />
          <CustomPieChart />
        </div>
      </main>
    </Layout>
  );
}
