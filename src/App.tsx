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
    title: "Modern blues",
    image: "https://picsum.photos/seed/picsum/200/300",
    description: "Modern blues guitar licks",
  },
  {
    id: "123",
    title: "Modern Metal",
    image: "https://picsum.photos/seed/picsum/200/300",
    description: "Modern metal guitar licks",
  },
  {
    id: "234",
    title: "Modern Jazz",
    image: "https://picsum.photos/seed/picsum/200/300",
    description: "Modern jazz guitar licks",
  },
];

const instructors = [
  {
    id: "543",
    name: "James Tokoca",
    image: "https://i.pravatar.cc/300",
    location: "Japan",
    style: "Blues",
  },
  {
    id: "543",
    name: "Julio Prada",
    image: "https://i.pravatar.cc/350",
    location: "Venezuela",
    style: "Jazz",
  },
  {
    id: "543",
    name: "Ramon Joselo",
    image: "https://i.pravatar.cc/400",
    location: "Mexico",
    style: "Metal",
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
      <FeatureSection title="1 on 1" id="1 on 1">
        {instructors.map((instructor) => (
          <InstructorCard item={instructor} key={instructor.id} />
        ))}
      </FeatureSection>
    </>
  );
}

export default App;
