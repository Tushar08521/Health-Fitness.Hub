// Blog page
// Replace posts and images as needed
import Header from "@/components/Header";
import SeoHead from "@/components/SeoHead";

export default function Blog() {
  const posts = [
    { title: "Top 10 Fitness Tips", description: "Boost your workout efficiency.", image: "https://source.unsplash.com/800x600/?fitness,blog1" },
    { title: "Nutrition Myths Debunked", description: "Learn what’s true and false.", image: "https://source.unsplash.com/800x600/?nutrition,blog" },
    { title: "Mental Health Awareness", description: "Improve your daily mindset.", image: "https://source.unsplash.com/800x600/?mental,health,blog" },
    { title: "Home Workouts for Beginners", description: "Simple routines at home.", image: "https://source.unsplash.com/800x600/?home,workout" },
    { title: "Meal Prep Made Easy", description: "Save time and eat healthy.", image: "https://source.unsplash.com/800x600/?meal,prep,blog" },
  ];

  return (
    <>
      <SeoHead
        title="Fitness Blog | Health & Fitness Hub"
        description="Expert articles on workouts, nutrition, and mental wellness for a healthy lifestyle."
        url="https://yourdomain.com/blog"
        image="https://source.unsplash.com/800x600/?fitness,blog"
        keywords="fitness blog, workout tips, nutrition advice, mental wellness articles, health tips, exercise guides, diet tips, healthy lifestyle, wellness blog, fitness articles"
      />
      <Header />
      <main className="pt-24 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">Blog</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.description}</p>
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
