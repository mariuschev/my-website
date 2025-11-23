"use client";

import React from "react";
import ReactECharts from "echarts-for-react";

const leftData = [
  { value: 27, name: "Second Master 2" },
  { value: 19, name: "Stage" },
  { value: 13, name: "Ecole de commerce" },
  { value: 6, name: "Thèse" },
  { value: 7, name: "LLM" },
  { value: 18, name: "CRFPA/EFB" },
  { value: 7, name: "CCD/CDI" },
  { value: 4, name: "Autres" },
];

const rightData = [
  { value: 34, name: "Corporate" },
  { value: 22, name: "Financier" },
  { value: 7, name: "Restructuring" },
  { value: 3, name: "Fiscalité" },
  { value: 4, name: "Pénal" },
  { value: 14, name: "Autres" },
  { value: 17, name: "Contentieux" },
];

export default function StatsCharts() {
  const common = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
      backgroundColor: "rgba(50,50,50,0.9)",
      textStyle: { color: "#fff" },
    },
    legend: { show: false },
  };

  // helper to build a linear gradient for echarts
  const makeGradient = (start: string, end: string) => ({
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      { offset: 0, color: start },
      { offset: 1, color: end },
    ],
    global: false,
  });

  // gradient palettes (start -> end) for a textured/modern look
  const leftGradients = [
    ["#7C3F58", "#C97A9A"],
    ["#F29E4C", "#F6C67A"],
    ["#6DA3B8", "#A6D1DA"],
    ["#B07AA1", "#D6B8D1"],
    ["#9AB87A", "#CFE6B3"],
    ["#E3C07B", "#F6DE9D"],
    ["#5F6B8A", "#9AA3BF"],
    ["#C6D6D9", "#EAF3F4"],
  ];

  const rightGradients = [
    ["#264653", "#426672"],
    ["#2A9D8F", "#74C9BA"],
    ["#E76F51", "#F4A38A"],
    ["#F4A261", "#F8C69A"],
    ["#E9C46A", "#F3DD9D"],
    ["#8AB17D", "#C2E2B9"],
    ["#6A4C93", "#9B83C9"],
  ];

  // attach gradient itemStyle to data entries so each slice gets its own gradient and subtle shadow
  const leftStyled = leftData.map((d, i) => ({
    ...d,
    itemStyle: {
      color: makeGradient(...(leftGradients[i % leftGradients.length] as [string, string])),
      borderColor: "#ffffff",
      borderWidth: 2,
      shadowBlur: 14,
      shadowColor: "rgba(0,0,0,0.10)",
    },
  }));

  const rightStyled = rightData.map((d, i) => ({
    ...d,
    itemStyle: {
      color: makeGradient(...(rightGradients[i % rightGradients.length] as [string, string])),
      borderColor: "#ffffff",
      borderWidth: 2,
      shadowBlur: 14,
      shadowColor: "rgba(0,0,0,0.10)",
    },
  }));

  const leftOption = {
    ...common,
    title: { text: "À la suite du M2", left: "center", top: 6 },
    series: [
      {
        name: "Suite",
        type: "pie",
        radius: [60, 140],
        center: ["50%", "55%"],
        roseType: "radius",
        data: leftStyled,
        emphasis: { itemStyle: { shadowBlur: 26, shadowOffsetX: 0, shadowColor: "rgba(0,0,0,0.26)" } },
        label: { formatter: "{b}\n{d}%", color: "#222" },
        labelLine: { smooth: true, length: 12, length2: 8 },
      },
    ],
    backgroundColor: "transparent",
  };

  const rightOption = {
    ...common,
    title: { text: "Expertise 10 dernières promotions 2010-2020", left: "center", top: 6 },
    series: [
      {
        name: "Expertise",
        type: "pie",
        radius: [60, 140],
        center: ["50%", "55%"],
        roseType: "radius",
        data: rightStyled,
        emphasis: { itemStyle: { shadowBlur: 26, shadowOffsetX: 0, shadowColor: "rgba(0,0,0,0.26)" } },
        label: { formatter: "{b}\n{d}%", color: "#222" },
        labelLine: { smooth: true, length: 12, length2: 8 },
      },
    ],
    backgroundColor: "transparent",
  };

  const containerStyle: React.CSSProperties = { width: "100%", display: "flex", gap: 28, alignItems: "stretch" };

  return (
    <div className="mt-8">
      <div style={containerStyle}>
        <div style={{ flex: 1, minWidth: 360 }}>
          <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <ReactECharts option={leftOption} style={{ height: 460, width: "100%" }} />
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 360 }}>
          <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <ReactECharts option={rightOption} style={{ height: 460, width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
