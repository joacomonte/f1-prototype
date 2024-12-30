'use client';
import NumberFlow from '@number-flow/react';
import { useEffect, useRef, useState } from 'react';

interface StatDisplayProps {
  value: number;
  unit: string;
  label: string;
  labelColor?: string;
}

export function StatDisplay({ value, unit, label, labelColor = '#d49600' }: StatDisplayProps) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setShow(entry.isIntersecting), { threshold: 0.8 });
    ref.current && observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-1 items-center">
        <NumberFlow
          ref={ref as any}
          className="md:text-2xl text-[15px] text-white"
          // transformTiming={{ duration: 1750}}
          spinTiming={{ duration: 1500, easing: 'ease' }}
          value={show ? value : 0}
        />
        <h4 className="md:text-2xl text-[15px] text-white">{unit}</h4>
      </div>
      <p
        style={{ color: labelColor }}
        className="md:text-base text-[10px] avenirBook">
        {label}
      </p>
    </div>
  );
}
