"use client";

import React, { useRef, useEffect } from 'react';
import Chart, { ChartData, ChartOptions } from 'chart.js/auto';
import { generateTestData } from '@/utils/testData';

const Mined = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    const { hours, sales } = generateTestData();

    const createGradient = (ctx: CanvasRenderingContext2D, height: number) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, 'rgba(145, 126, 234, 0.4)'); 
      gradient.addColorStop(1, 'rgba(145, 126, 234, 0)');  
      return gradient;
    };

    const gradient = createGradient(ctx, chartRef.current!.height);

    const data: ChartData<'line', number[], string> = {
      labels: hours,
      datasets: [
        {
          label: 'Sales',
          data: sales,
          borderColor: '#917EEA', 
          borderWidth: 2, 
          pointBackgroundColor: '#917EEA', 
          pointRadius: 0,
          cubicInterpolationMode: 'monotone',
          fill: 'origin', 
          backgroundColor: gradient, 
        },
      ],
    };

    const options: ChartOptions<'line'> = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false, 
          },
          ticks: {
            display: false, 
          },
        },
        y: {
          grid: {
            display: false, 
          },
          ticks: {
            display: false, 
          },
        },
      },
      plugins: {
        legend: {
          display: false, 
        },
        tooltip: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          titleColor: '#000', 
          bodyColor: '#000', 
          borderColor: '#917EEA', 
          borderWidth: 1,
          cornerRadius: 8,
          padding: 10,
          callbacks: {
            label: (context: any) => {
              const price = context.parsed.y.toFixed(2); 
              const time = hours[context.parsed.x]; 
              const percentageChange = ((context.parsed.y / sales[0]) * 100 - 100).toFixed(1); 
              return `${price} (+${percentageChange}%) at ${time}`;
            },
            title: () => '29 July 00:00', 
          },
        },
      },
    };

    const myChart = new Chart(ctx, {
      type: 'line',
      data,
      options,
    });

    return () => {
      myChart.destroy(); 
    };
  }, []);

  return (
    <div className="relative w-full h-[170px]"> 
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Mined;
