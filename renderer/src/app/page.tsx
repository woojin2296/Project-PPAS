import { HomeFooter, HomeHeader, HomeMenu } from "@/components/home";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center md:p-10">
      <div className="flex w-full flex-col gap-3">
        <HomeHeader />
        <HomeMenu serviceName="Project-PPAS" serviceDescription="Project PPAS is service that provides personal presentation assistance service" />
        <HomeFooter />
      </div>
    </div>
  );
}
