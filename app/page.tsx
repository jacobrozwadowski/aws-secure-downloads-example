import DownloadButton from "@/components/download-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <h1>Idk whatever nigga</h1>
      <DownloadButton fileName="adobe.rar" />
    </div>
  );
}
