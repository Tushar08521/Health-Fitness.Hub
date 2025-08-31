// Header with navigation
// Replace nav items or icons as needed
import { useState, useEffect } from "react";
import Link from "next/link";
import { Dumbbell, Salad, HeartPulse, BookOpen, Mail } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState("/");

  const navItems = [
    { name: "Workout", href: "/workout", icon: <Dumbbell className="h-5 w-5 mr-1 inline" /> },
    { name: "Nutrition", href: "/nutrition", icon: <Salad className="h-5 w-5 mr-1 inline" /> },
    { name: "Mental Wellness", href: "/mental-wellness", icon: <HeartPulse className="h-5 w-5 mr-1 inline" /> },
    { name: "Blog", href: "/blog", icon: <BookOpen className="h-5 w-5 mr-1 inline" /> },
    { name: "Newsletter", href: "/newsletter", icon: <Mail className="h-5 w-5 mr-1 inline" /> },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    setActivePage(window.location.pathname);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-md ${isScrolled ? "bg-green-100/80 shadow-md" : "bg-transparent"}`}>
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4 sm:p-6">
        <Link href="/" className="text-green-800 font-bold text-xl sm:text-2xl">
          Health & Fitness
        </Link>

        <div className="flex gap-3 sm:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center font-medium transition ${activePage === item.href ? "text-green-900 border-b-2 border-green-900" : "text-green-700 hover:text-green-900"}`}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
