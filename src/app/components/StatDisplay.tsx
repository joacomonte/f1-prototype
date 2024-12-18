interface StatDisplayProps {
  value: string;
  label: string;
  labelColor?: string;
}

export function StatDisplay({ value, label, labelColor = '#d49600' }: StatDisplayProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h4 className="md:text-2xl text-base text-white">{value}</h4>
      <p
        style={{ color: labelColor }}
        className="md:text-base text-sm ">
        {label}
      </p>
    </div>
  );
}
