// Home page
// Replace content and links as needed
import Header from "@/components/Header";
import SeoHead from "@/components/SeoHead";

export default function Home() {
  const features = [
    { title: "Personalized Workouts", description: "Customized plans for all levels.", image: "https://source.unsplash.com/800x600/?fitness,exercise" },
    { title: "Nutrition Tips", description: "Healthy eating for optimal performance.", image: "https://source.unsplash.com/800x600/?nutrition,healthy" },
    { title: "Mental Wellness", description: "Guides for mindfulness and stress relief.", image: "https://source.unsplash.com/800x600/?meditation,mindfulness" },
    { title: "Fitness Blog", description: "Expert articles and advice.", image: "https://source.unsplash.com/800x600/?fitness,blog" },
    { title: "Newsletter", description: "Weekly updates and tips.", image: "https://source.unsplash.com/800x600/?newsletter,fitness" },
  ];

  return (
    <>
      <SeoHead
        title="Health & Fitness Hub | Your Guide to Wellness"
        description="Discover workouts, nutrition, mental wellness, and more to live a healthier lifestyle."
        url="https://yourdomain.com/"
        image="https://source.unsplash.com/800x600/?fitness,health"
        keywords="health and fitness, workout, nutrition, mental wellness, fitness blog, fitness tips, healthy lifestyle, exercise, wellness, diet plan"
      />
      <Header />
      <main className="pt-24 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">Welcome to Health & Fitness Hub</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
