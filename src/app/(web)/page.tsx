import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import Gallery from "@/components/Gallery/Gallery";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import { getFeaturedRoom } from "@/libs/apis";
import { Hero } from "@/components/Hero/Hero";

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();

  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <PageSearch />
      <div className="container mx-auto">
        <FeaturedRoom featuredRoom={featuredRoom} />
        <Gallery />
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
