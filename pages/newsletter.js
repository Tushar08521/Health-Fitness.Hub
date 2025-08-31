// Newsletter page
// Replace posts and images as needed
import Header from "@/components/Header";
import SeoHead from "@/components/SeoHead";

export default function Newsletter() {
  const topics = [
    { title: "Weekly Workout Plans", description: "Stay consistent with guided routines.", image: "https://source.unsplash.com/800x600/?workout,newsletter" },
    { title: "Healthy Recipes Updates", description: "New meal ideas every week.", image: "https://source.unsplash.com/800x600/?nutrition,newsletter" },
    { title: "Mental Wellness Tips", description: "Meditation and mindfulness guidance.", image: "https://source.unsplash.com/800x600/?mental,wellness,newsletter" },
    { title: "Fitness Product Reviews", description: "Recommended gear and supplements.", image: "https://source.unsplash.com/800x600/?fitness,gear" },
    { title: "Subscriber Exclusive Content", description: "Get special tips only for members.", image: "https://source.unsplash.com/800x600/?exclusive,newsletter" },
  ];

  return (
    <>
      <SeoHead
        title="Newsletter | Health & Fitness Hub"
        description="Subscribe for weekly updates on fitness, nutrition, and mental wellness."
        url="https://yourdomain.com/newsletter"
        image="https://source.unsplash.com/800x600/?newsletter,fitness"
        keywords="fitness newsletter, health tips newsletter, workout updates, nutrition updates, wellness newsletter, subscribe fitness, health tips emails, fitness articles, healthy lifestyle newsletter, mental wellness tips"
      />
      <Header />
      <main className="pt-24 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">Newsletter</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={topic.image} alt={topic.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>
                <p className="text-gray-700">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AdSense placeholder */}
        <div className="my-6 flex justify-center">
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"  // <-- Replace with your AdSense ID
            data-ad-slot="1234567890"                // <-- Replace with your Ad unit ID
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
        </div>
      </main>
    </>
  );
}
