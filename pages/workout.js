// Workout page
// Replace posts and images as needed
import Header from "@/components/Header";
import SeoHead from "@/components/SeoHead";

export default function Workout() {
  const posts = [
    { title: "Full Body Workout", description: "Beginner-friendly exercises", image: "https://source.unsplash.com/800x600/?fitness,workout1" },
    { title: "Cardio Blast", description: "High intensity cardio routine", image: "https://source.unsplash.com/800x600/?fitness,cardio" },
    { title: "Strength Training", description: "Muscle building exercises", image: "https://source.unsplash.com/800x600/?fitness,strength" },
    { title: "Yoga Flow", description: "Flexibility and relaxation", image: "https://source.unsplash.com/800x600/?fitness,yoga" },
    { title: "HIIT Challenge", description: "Short high intensity interval training", image: "https://source.unsplash.com/800x600/?fitness,hiit" },
  ];

  return (
    <>
      <SeoHead
        title="Workout Plans | Health & Fitness Hub"
        description="Explore beginner to advanced workout routines for a healthier body."
        url="https://yourdomain.com/workout"
        image="https://source.unsplash.com/800x600/?fitness,workout"
        keywords="home workouts, workout routines, fitness exercises, strength training, cardio workouts, beginner workouts, advanced workouts, exercise plan, bodyweight exercises, weight training"
      />
      <Header />
      <main className="pt-24 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">Workout Plans</h1>
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

