import TestScene from "@/components/3d/TestScene";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] px-4 py-12">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          AI দিয়ে যেকোনো ছবি থেকে 3D অ্যানিমেশন বানাও!
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10">
          প্রম্পট দাও বা ভয়েস বলো – AI অটোমেটিক 3D মডেল + অ্যানিমেশন তৈরি করবে।
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/sign-up" className="px-8 py-4 bg-primary hover:bg-primary-hover text-white text-xl rounded-xl shadow-lg transition transform hover:scale-105">
            ফ্রি ট্রায়াল শুরু করো
          </a>
          <button className="px-8 py-4 border border-primary hover:bg-primary/20 text-xl rounded-xl transition">
            ডেমো দেখো
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl text-center">
        <h2 className="text-4xl font-semibold mb-6 text-blue-300">3D প্রিভিউ টেস্ট</h2>
        <TestScene />
      </div>
    </div>
  );
}