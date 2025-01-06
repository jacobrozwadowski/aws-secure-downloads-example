"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { DownloadCloud } from "lucide-react";

interface DownloadButtonProps {
  fileName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileName }) => {
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/getsignedurl?fileName=${fileName}`);
      const data = await response.json();

      if (data.url) {
        const link = document.createElement("a");
        link.href = data.url;
        link.download = fileName;
        link.click();
      } else {
        setError("Failed to retrieve the download link.");
      }
    } catch (error) {
      setError("An error occured while fetching the signed URL");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button variant="outline" onClick={handleDownload} disabled={loading}>
        <DownloadCloud />
        {loading ? "Generating download link..." : `Download ${fileName}`}
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default DownloadButton;
