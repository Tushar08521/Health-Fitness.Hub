// Nutrition page
// Replace posts and images as needed
import Header from "@/components/Header";
import SeoHead from "@/components/SeoHead";

export default function Nutrition() {
  const posts = [
    { title: "Balanced Diet Tips", description: "Maintain energy and health.", image: "https://source.unsplash.com/800x600/?nutrition,balanced" },
    { title: "Protein-Rich Foods", description: "Build muscle efficiently.", image: "https://source.unsplash.com/800x600/?protein,food" },
    { title: "Healthy Meal Prep", description: "Save time and eat smart.", image: "https://source.unsplash.com/800x600/?meal,prep" },
    { title: "Vitamins & Minerals", description: "Essential nutrients for wellbeing.", image: "https://source.unsplash.com/800x600/?vitamins,minerals" },
    { title: "Weight Loss Diet", description: "Effective and safe plans.", image: "https://source.unsplash.com/800x600/?weightloss,diet" },
  ];

  return (
    <>
      <SeoHead
        title="Nutrition Tips | Health & Fitness Hub"
        description="Healthy eating guides, meal prep ideas, and nutrition tips for a balanced lifestyle."
        url="https://yourdomain.com/nutrition"
        image="https://source.unsplash.com/800x600/?nutrition,healthy"
        keywords="healthy diet, nutrition tips, meal plans, balanced diet, healthy recipes, weight loss diet, protein foods, vitamins and minerals, meal prep, nutrition guide"
      />
      <Header />
      <main className="pt-24 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">Nutrition Tips</h1>
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
