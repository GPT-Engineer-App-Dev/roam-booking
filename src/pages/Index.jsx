import { useState } from "react";
import { Carousel } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Testimonial } from "@/components/Testimonial";

const Index = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching for:", search);
  };

  return (
    <div className="space-y-8">
      <HeroSection search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <FeaturedDestinations />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

const HeroSection = ({ search, setSearch, handleSearch }) => (
  <section className="relative h-[500px] bg-gray-200">
    <Carousel>
      <Carousel.Item>
        <img src="/images/destination1.jpg" alt="Destination 1" className="w-full h-full object-cover" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/destination2.jpg" alt="Destination 2" className="w-full h-full object-cover" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/destination3.jpg" alt="Destination 3" className="w-full h-full object-cover" />
      </Carousel.Item>
    </Carousel>
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
      <h1 className="text-4xl font-bold">Explore the World</h1>
      <div className="mt-4 flex space-x-2">
        <Input
          type="text"
          placeholder="Search destinations"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  </section>
);

const FeaturedDestinations = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold">Featured Destinations</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <img src="/images/destination1.jpg" alt="Destination 1" className="w-full h-48 object-cover" />
        <CardHeader>
          <CardTitle>Destination 1</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Discover the beauty of Destination 1.</p>
        </CardContent>
      </Card>
      <Card>
        <img src="/images/destination2.jpg" alt="Destination 2" className="w-full h-48 object-cover" />
        <CardHeader>
          <CardTitle>Destination 2</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Explore the wonders of Destination 2.</p>
        </CardContent>
      </Card>
      <Card>
        <img src="/images/destination3.jpg" alt="Destination 3" className="w-full h-48 object-cover" />
        <CardHeader>
          <CardTitle>Destination 3</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Experience the magic of Destination 3.</p>
        </CardContent>
      </Card>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold">How It Works</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Step 1</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Choose your destination.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Step 2</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Select your travel dates.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Step 3</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Book your trip.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Step 4</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Enjoy your vacation!</p>
        </CardContent>
      </Card>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold">Testimonials</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Testimonial
        image="/images/customer1.jpg"
        name="Customer 1"
        quote="This was the best trip of my life!"
      />
      <Testimonial
        image="/images/customer2.jpg"
        name="Customer 2"
        quote="Amazing experience, highly recommend!"
      />
      <Testimonial
        image="/images/customer3.jpg"
        name="Customer 3"
        quote="A wonderful adventure from start to finish."
      />
    </div>
  </section>
);

export default Index;