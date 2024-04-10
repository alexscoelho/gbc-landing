import "./App.css";
import FeatureCard from "./components/featureCard";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import FeatureSection from "./components/featureSection";
import ITestimonial from "./models/Testimonial";
import SlidesShow from "./components/slidesShow";
import InstructorCard from "./components/instructorCard";

const testimonials: ITestimonial[] = [
  {
    id: "123",
    avatar: "https://i.pravatar.cc/300",
    comment: "Great intructors, the course was well structured",
    name: "John Doe",
  },
  {
    id: "234",
    avatar: "https://i.pravatar.cc/250",
    comment: "Great intructors, the course was well structured",
    name: "Carl Doe",
  },
  {
    id: "345",
    avatar: "https://i.pravatar.cc/350",
    comment: "Great intructors, the course was well structured",
    name: "Trevor Doe",
  },
  {
    id: "567",
    avatar: "https://i.pravatar.cc/350",
    comment: "Great intructors, the course was well structured",
    name: "Jane Doe",
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
    name: "Alexson Coelho",
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
      <FeatureSection title="Styles" id="styles">
        {courses.map((course) => (
          <FeatureCard item={course} key={course.id} />
        ))}
      </FeatureSection>
      <SlidesShow items={testimonials} />
      <FeatureSection title="1 on 1" id="1 on 1">
        {instructors.map((instructor) => (
          <InstructorCard item={instructor} key={instructor.id} />
        ))}
      </FeatureSection>
    </>
  );
}

export default App;
