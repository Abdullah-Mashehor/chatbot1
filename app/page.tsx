import Image from "next/image";
import Chatbot from "./chatbot";
export default function Home() {
  return (
    <>
      <main className="flex flex-col h-screen">


        <Image
        src="/CHATBOT.png"
        alt="UTM"
        layout="fill"
        quality={100}
        
        />
        <Chatbot />


      </main>
    </>
  );
}
