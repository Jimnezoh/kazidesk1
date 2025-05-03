import FeatureOne from "@/components/FeatureOne";
import Finances from "@/components/Finances";
import Overview from "@/components/Overview";

export default function Home({ isSidebarOpen }) {
  return (
    <main className="">
      <FeatureOne />
      <Overview />
      <Finances />

    </main>
  );
}
