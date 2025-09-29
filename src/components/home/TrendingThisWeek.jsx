import TrendingThisWeekCard from "./TrendingThisWeekCard";

const TrendingThisWeek = () => {
  const trending = [
    {
      id: 1,
      image: "/banners/trending.jpg",
      status: "Ongoing",
      title: "Comic Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      title: "Comic Name",
      genre: ["Academy", "Action"],
      rating: 9.3,
      type: "Manga",
    },
    {
      id: 2,
      image: "/banners/trending.jpg",
      status: "Ongoing",
      title: "Comic Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      genre: ["Action", "Adventure"],
      rating: 9.8,
      type: "Manhua",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-purple-950">Trending This Week</h2>
      {trending.map((item) => (
        <TrendingThisWeekCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default TrendingThisWeek;