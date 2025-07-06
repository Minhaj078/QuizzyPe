// src/app/mystats/page.js
"use client"; // <--- IMPORTANT: Keep this line at the very top!

import { useState, useEffect } from 'react'; // Import useEffect for client-side lifecycle
import Image from 'next/image';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { categories as allCategoriesData } from '../../data/quizzes'; // Import categories for mapping IDs to names

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function MyStatsPage() {
  const [quizStats, setQuizStats] = useState({});
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [totalCompleted, setTotalCompleted] = useState(0);

  useEffect(() => {
    // This code runs only on the client side after the component mounts
    const storedStats = JSON.parse(localStorage.getItem('quizStats')) || {};
    setQuizStats(storedStats);

    let calculatedAttempts = 0;
    let calculatedCompleted = 0;
    for (const categoryId in storedStats) {
      calculatedAttempts += storedStats[categoryId].attempts;
      calculatedCompleted += storedStats[categoryId].completions;
    }
    setTotalAttempts(calculatedAttempts);
    setTotalCompleted(calculatedCompleted);
  }, []); // Empty dependency array means this useEffect runs only once after the initial render

  // Prepare chart data dynamically based on quizStats from localStorage
  const chartDataForCategories = Object.keys(quizStats).map(categoryId => {
    const categoryName = allCategoriesData.find(cat => cat.id === categoryId)?.name || categoryId; // Get category name or use ID as fallback
    const stats = quizStats[categoryId];
    return {
      categoryName,
      data: {
        labels: ['Attempts', 'Completed'],
        datasets: [
          {
            label: categoryName, // Label for the dataset (though hidden by legend: false)
            data: [stats.attempts, stats.completions],
            backgroundColor: ['#60A5FA', '#4ade80'], // Blue for attempts, green for completed
            borderRadius: 5,
          },
        ],
      }
    };
  });

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide dataset label as we show it in the card title
      },
      title: {
        display: true,
        text: 'Attempts vs Completions',
        font: {
          size: 16,
          weight: 'bold',
        },
        color: '#374151', // Tailwind's gray-700
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (context.parsed.y !== null) {
              label += `: ${context.parsed.y}`;
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Hide y-axis grid lines
        },
        ticks: {
          precision: 0, // Ensure integer ticks for counts
          color: '#6B7280', // Tailwind's gray-500
        }
      },
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
        ticks: {
          color: '#6B7280', // Tailwind's gray-500
        }
      }
    },
  };

  return (
    <div className="container mx-auto py-8">
      {/* Central Icon/Logo */}
      <div className="flex justify-center items-center mb-8">
        <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center shadow-lg">
          {/* Ensure you have an image at /public/images/large-stats-icon.png */}
          <Image src="/images/stats-icon.png" alt="Stats Icon" width={80} height={80} />
        </div>
      </div>

      {/* Overview Section */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Overview</h1>
      <p className="text-gray-600 mb-8">A summary of your recent activity and performance.</p> {/* Added this description */}


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Recent Attempt Card (This remains a placeholder as detailed tracking requires more complex localStorage structure or a backend) */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">TheCodeDealer</h2>
            <p className="text-gray-600 text-sm">Recent Attempt</p>
          </div>
          <p className="text-gray-500 text-xs mt-2">No recent attempt data tracked (placeholder)</p>
        </div>

        {/* Total Attempts Card - Dynamically updated */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Total Attempts</h2>
          <span className="text-4xl font-bold text-blue-600">{totalAttempts}</span>
        </div>

        {/* Total Completed Card - Dynamically updated */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Total Completed</h2>
          <span className="text-4xl font-bold text-green-500">{totalCompleted}</span>
        </div>
      </div>

      {/* Chart Section - Dynamically rendered based on attempted categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {chartDataForCategories.length === 0 ? (
          <p className="col-span-full text-center text-gray-600 text-lg">
            Take some quizzes to see your stats here!
          </p>
        ) : (
          chartDataForCategories.map((chartItem) => (
            <div key={chartItem.categoryName} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{chartItem.categoryName}</h2>
              <div className="h-64"> {/* Fixed height for chart */}
                <Bar data={chartItem.data} options={chartOptions} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}