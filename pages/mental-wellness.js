// Mental Wellness page
// Replace posts and images as needed
import Header from "@/components/Header";
import SeoHead from "@/components/SeoHead";

export default function MentalWellness() {
  const posts = [
    { title: "Meditation Basics", description: "Calm your mind daily.", image: "https://source.unsplash.com/800x600/?meditation,peace" },
    { title: "Stress Relief Techniques", description: "Reduce tension effectively.", image: "https://source.unsplash.com/800x600/?stress,relief" },
    { title: "Mindfulness Exercises", description: "Be present and aware.", image: "https://source.unsplash.com/800x600/?mindfulness,exercise" },
    { title: "Anxiety Management", description: "Tips for mental balance.", image: "https://source.unsplash.com/800x600/?anxiety,relax" },
    { title: "Self-Care Routines", description: "Prioritize your mental health.", image: "https://source.unsplash.com/800x600/?selfcare,wellness" },
  ];

  return (
    <>
      <SeoHead
        title="Mental Wellness | Health & Fitness Hub"
        description="Explore meditation, mindfulness, stress relief, and mental health tips."
        url="https://yourdomain.com/mental-wellness"
        image="https://source.unsplash.com/800x600/?mental,wellness"
        keywords="mental health, mindfulness, meditation, stress relief, anxiety tips, mental wellness, mental health exercises, relaxation techniques, self care, positive mindset"
      />
      <Header />
      <main className="pt-24 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">Mental Wellness</h1>
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
      </main>
    </>
  );
}
