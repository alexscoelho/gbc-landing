import "./App.css";
import FeatureCard from "./components/featureCard";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import FeatureSection from "./components/featureSection";
import ITestimonial from "./models/Testimonial";
import SlidesShow from "./components/slidesShow";

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

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection title="Courses">
        <FeatureCard></FeatureCard>
        <FeatureCard></FeatureCard>
        <FeatureCard></FeatureCard>
      </FeatureSection>
      <SlidesShow items={testimonials} />
      <FeatureSection title="1 on 1">
        <FeatureCard></FeatureCard>
        <FeatureCard></FeatureCard>
        <FeatureCard></FeatureCard>
      </FeatureSection>
    </>
  );
}

export default App;
