"use client";

import { useState } from "react";
import html2canvas from "html2canvas";

export default function DownloadButton({ targetId, filename }: { targetId: string, filename: string }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    const el = document.getElementById(targetId);
    if (!el) return;
    
    setDownloading(true);
    try {
      const canvas = await html2canvas(el, {
        scale: 1, // 1x scale is exactly 1080x1080 since the element is hardcoded to 1080x1080
        useCORS: true,
        backgroundColor: "#0C0A08", // Match C.bg
      });
      
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = filename;
      link.click();
    } catch (e) {
      console.error("Failed to generate image", e);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      style={{
        background: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.2)",
        color: "#fff",
        padding: "6px 16px",
        borderRadius: "4px",
        cursor: downloading ? "wait" : "pointer",
        fontFamily: "'DM Mono','Courier New',monospace",
        fontSize: "12px",
        letterSpacing: "0.05em",
        opacity: downloading ? 0.6 : 1,
        transition: "all 0.2s"
      }}
    >
      {downloading ? "GENERATING..." : "DOWNLOAD PNG (1080x1080)"}
    </button>
  );
}
