import "./App.css";
import FeatureCard from "./components/featureCard";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import FeatureSection from "./components/featureSection";
import ITestimonial from "./models/Testimonial";
import SlidesShow from "./components/slidesShow";
import InstructorCard from "./components/instructorCard";
import { PriceCard } from "./components/priceCard";
import { Footer } from "./components/footer";
import { GearAdvisor } from "./components/gearAdvisor";

const testimonials: ITestimonial[] = [
  {
    id: "123",
    avatar: "https://i.pravatar.cc/300",
    comment: "Great intructors, the course was well structured",
    name: "Ana",
  },
  {
    id: "234",
    avatar: "https://i.pravatar.cc/250",
    comment: "Now i can play my favorite songs",
    name: "Steven",
  },
  {
    id: "345",
    avatar: "https://i.pravatar.cc/350",
    comment: "Just started to learn guitar, made good progress in short time",
    name: "Christian",
  },
];

const courses = [
  {
    id: "543",
    title: "Modern Metal",
    url: "https://www.youtube.com/watch?v=nAoLCfDj74c",
    image: "https://picsum.photos/seed/picsum/200/300",
    description: "Learn modern metal soloing",
  },
  {
    id: "123",
    title: "Rock",
    image: "https://picsum.photos/seed/picsum/200/300",
    url: "https://www.youtube.com/watch?v=K1aDfZg4-Cc&t=5s",
    description: "Learn your favorite rock solos",
  },
  {
    id: "234",
    title: "Jazz/Fusion",
    image: "https://picsum.photos/seed/picsum/200/300",
    url: "https://www.youtube.com/watch?v=QJJpRAIIu5o",
    description: "Learn scales and technique",
  },
];

const instructors = [
  {
    id: "543",
    name: "Alex",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_keshUrRL2lMntoS6ovGBcJ3FpXitQnyWXyxPnHkT5fLw=s176-c-k-c0x00ffffff-no-rj",
    location: "USA",
    style: "Rock/Metal",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection title="Courses" id="courses">
        {courses.map((course) => (
          <FeatureCard item={course} key={course.id} />
        ))}
      </FeatureSection>
      <SlidesShow items={testimonials} />
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
