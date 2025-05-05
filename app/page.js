import EmployeeSearchBar from "@/components/Employeesearchbar";
import Employeestable from "@/components/Employeestable";
import FeatureOne from "@/components/FeatureOne";
import Finances from "@/components/Finances";
import Overview from "@/components/Overview";

export default function Home({ isSidebarOpen }) {
  return (
    <main className="">
      <FeatureOne />
      <Overview />
      <Finances />
      <EmployeeSearchBar />
      <Employeestable />

    </main>
  );
}
