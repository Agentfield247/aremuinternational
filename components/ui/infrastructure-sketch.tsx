"use client";

import React from "react";

export default function InfrastructureSketch() {
  return (
    // UPDATED: Opacity is 30% on mobile to not clash with text, 70% on desktop
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 md:opacity-70">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
            @keyframes data-flow {
              from { stroke-dashoffset: 1200; }
              to { stroke-dashoffset: 0; }
            }
            @keyframes data-flow-reverse {
              from { stroke-dashoffset: 0; }
              to { stroke-dashoffset: 1200; }
            }
            .base-line {
              stroke: rgba(255, 90, 0, 0.15);
              stroke-width: 1;
            }
            .glowing-light {
              stroke: #FF5A00;
              stroke-width: 2;
              stroke-linecap: round;
              filter: drop-shadow(0 0 8px #FF5A00);
            }
            .flow-slow {
              stroke-dasharray: 80 1120;
              animation: data-flow 12s linear infinite;
            }
            .flow-fast {
              stroke-dasharray: 120 1080;
              animation: data-flow 8s linear infinite;
            }
            .flow-reverse {
              stroke-dasharray: 100 1100;
              animation: data-flow-reverse 15s linear infinite;
            }
            .node {
              fill: #050608;
              stroke: rgba(255, 90, 0, 0.4);
              stroke-width: 1.5;
            }
          `}
        </style>

        <defs>
          <path
            id="path1"
            d="M-100,200 L150,200 L200,150 L400,150 L450,200 L700,200 L750,150 L1300,150"
          />
          <path
            id="path2"
            d="M-100,500 L250,500 L300,450 L600,450 L650,400 L1300,400"
          />
          <path
            id="path3"
            d="M-100,650 L400,650 L450,700 L800,700 L850,650 L1300,650"
          />
          <path
            id="path4"
            d="M150,-100 L150,150 L100,200 L100,450 L150,500 L150,900"
          />
          <path
            id="path5"
            d="M700,-100 L700,150 L650,200 L650,350 L700,400 L700,900"
          />
          <path
            id="path6"
            d="M250,300 L400,300 L450,250 L600,250 L650,300 L900,300"
          />
        </defs>

        <use href="#path1" className="base-line" />
        <use href="#path2" className="base-line" />
        <use href="#path3" className="base-line" />
        <use href="#path4" className="base-line" />
        <use href="#path5" className="base-line" />
        <use href="#path6" className="base-line" />

        <g className="base-line">
          <rect x="900" y="100" width="120" height="180" rx="4" />
          <line x1="900" y1="130" x2="1020" y2="130" />
          <line x1="900" y1="160" x2="1020" y2="160" />
          <line x1="900" y1="190" x2="1020" y2="190" />
          <circle cx="920" cy="115" r="3" className="node" />
          <circle cx="920" cy="145" r="3" className="node" />

          <rect x="300" y="550" width="100" height="140" rx="4" />
          <line x1="300" y1="580" x2="400" y2="580" />
          <line x1="300" y1="610" x2="400" y2="610" />
          <circle cx="320" cy="565" r="3" className="node" />
        </g>

        <circle cx="150" cy="200" r="4" className="node" />
        <circle cx="450" cy="200" r="4" className="node" />
        <circle cx="700" cy="200" r="4" className="node" />
        <circle cx="250" cy="500" r="4" className="node" />
        <circle cx="650" cy="400" r="4" className="node" />
        <circle cx="100" cy="450" r="4" className="node" />
        <circle cx="650" cy="200" r="4" className="node" />

        <use href="#path1" className="glowing-light flow-fast" />
        <use href="#path2" className="glowing-light flow-slow" />
        <use href="#path3" className="glowing-light flow-reverse" />
        <use
          href="#path4"
          className="glowing-light flow-slow"
          style={{ animationDelay: "2s" }}
        />
        <use
          href="#path5"
          className="glowing-light flow-reverse"
          style={{ animationDelay: "1s" }}
        />
        <use
          href="#path6"
          className="glowing-light flow-fast"
          style={{ animationDelay: "3s" }}
        />
      </svg>
    </div>
  );
}
