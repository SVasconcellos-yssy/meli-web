import React from 'react';
import "./Skeleton.scss"

export default function Skeleton({ width, height }) {
  return (
    <div className="skeleton" style={{ width, height }}></div>
  );
};


