import "./App.css";
import FeatureCard from "./components/featureCard";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import FeatureSection from "./components/featureSection";
import InstructorCard from "./components/instructorCard";
import { PriceCard } from "./components/priceCard";
import { Footer } from "./components/footer";
import { GearAdvisor } from "./components/gearAdvisor";

import instructor from "./assets/instructor.jpeg";

const courses = [
  {
    id: "543",
    title: "Pentatonic 3 Notes Per String",
    url: "https://www.youtube.com/watch?v=nAoLCfDj74c",
    image: "https://picsum.photos/seed/picsum/200/300",
    description: "3 notes per string pentatonic, legatto",
  },
];

const instructors = [
  {
    id: "543",
    name: "Alex",
    image: instructor,
    location: "USA",
    style: "Rock/Metal",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection title="Free Courses" id="courses" columns={3}>
        {courses.map((course) => (
          <FeatureCard item={course} key={course.id} />
        ))}
      </FeatureSection>
      <FeatureSection title="Instructors" id="instructors" columns={1}>
        {instructors.map((instructor) => (
          <InstructorCard item={instructor} key={instructor.id} />
        ))}
      </FeatureSection>
      <PriceCard />
      <GearAdvisor />
      <Footer />
    </>
  );
}

export default App;
