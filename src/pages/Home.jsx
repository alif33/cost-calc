import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed right-0 left-0 z-10 bg-opacity-80">
        <Navbar />
      </div>
      <div className="px-5 lg:ps-14 lg:pr-7">
        <Layout />
      </div>
    </div>
  );
}
