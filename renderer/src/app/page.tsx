import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProfileStatusSection, ProjectPinSection, RecentProjectSection } from "@/components/Home";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-4">
      <Header hasBackButton={false} hasMenuButton={true} backPath="#" title="" />
      <div className="pt-24">
        <ProfileStatusSection />
        <ProjectPinSection />
        <RecentProjectSection />
      </div>
      <Footer />
    </div>
  );
}
