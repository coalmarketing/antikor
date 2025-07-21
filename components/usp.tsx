import React from "react";

export type UspPoint = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

interface UspSectionProps {
  uspPoints: UspPoint[];
  columnCount: 1 | 2 | 3 | 4;
}

export const UspSection: React.FC<UspSectionProps> = ({
  uspPoints,
  columnCount,
}) => {
  return (
    <div
      className={
        `w-full grid gap-8 py-8` +
        (columnCount === 1
          ? " grid-cols-1"
          : columnCount === 2
          ? " grid-cols-1 md:grid-cols-2"
          : columnCount === 3
          ? " grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : " grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
      }
    >
      {uspPoints.map((point, index) => (
        <div key={index} className="text-center border border-light p-4">
          <div className="w-20 h-20 mx-auto mb-6 grid place-content-center text-5xl blob-animated bg-lobster">
            {point.icon}
          </div>
          <h3 className="font-bold text-2xl mb-3 leading-none">
            {point.title}
          </h3>
          <p className="opacity-65">{point.description}</p>
        </div>
      ))}
    </div>
  );
};
