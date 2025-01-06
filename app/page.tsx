import DownloadButton from "@/components/download-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="font-bold text-2xl">Download Your File</h1>
      <DownloadButton fileName="adobe.rar" />
    </div>
  );
}
