import { useState, useEffect } from 'react';

export const Stats = () => {
  const stats = [
    { initial: 1.1, target: 1.6, label: 'Registered Users', unit: 'Cr+' },
    { initial: 490, target: 500, label: 'Crypto Assets', unit: '+' },
    { initial: 71.6, target: 79.6, label: 'Quarterly Trading Volumes', unit: 'k Cr+' },
  ];

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 500; // Animation duration in milliseconds (2 seconds)
    const steps = 10; // Number of animation steps
    const incrementTime = duration / steps;

    const intervals = stats.map((stat, index) => {
      let currentValue = stat.initial;
      const increment = (stat.target - stat.initial) / steps;

      return setInterval(() => {
        currentValue += increment;
        setAnimatedValues((prev) => {
          const newValues = [...prev];
          newValues[index] = currentValue;
          return newValues.map((val, i) =>
            i === index ? Math.min(val, stat.target).toFixed(stat.target % 1 === 0 ? 0 : 1) : prev[i]
          );
        });
      }, incrementTime);
    });

    // Clear intervals after animation completes
    const timeout = setTimeout(() => {
      intervals.forEach(clearInterval);
      setAnimatedValues(stats.map((stat) => stat.target.toFixed(stat.target % 1 === 0 ? 0 : 1)));
    }, duration);

    return () => {
      intervals.forEach(clearInterval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="bg-white py-12 px-4 md:px-48 ">
      <h2 className="text-2xl md:text-4xl font-semibold mb-12">
        Your premier platform for crypto
      </h2>
      <div className="flex justify-between md:flex gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-4xl md:text-5xl ">
              {stat.unit === '₹ Cr+' ? '₹' : ''}
              {animatedValues[index]}
              {stat.unit}
            </h3>
            <p className="text-lg text-gray-500 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};