"use client";

import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function QRGenerator() {
  const [text, setText] = useState<string>("");
  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector("canvas");
      if (canvas) {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "qrcode.png";
        link.click();
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          QR Code Generator
        </h1>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL"
          className="mb-4"
        />
        <div
          ref={qrRef}
          className="p-4 flex justify-center items-center bg-white rounded-lg shadow-md"
        >
          {text ? (
            <QRCodeCanvas value={text} size={200} />
          ) : (
            <p className="text-gray-500">Enter text to generate QR code</p>
          )}
        </div>
        {/* <Button onClick={handleDownload} className="mt-4 w-full">
          Download QR Code
        </Button> */}
      </div>
    </div>
  );
}
