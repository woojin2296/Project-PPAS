import { Header } from "@/components/header";
import { HomeFooter, HomeMenu } from "@/components/home";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center md:p-10">
      <div className="flex w-full flex-col gap-3">
        <Header hasBackButton={false} hasMenuButton={true} backPath="#" title=""/>
        <HomeMenu serviceName="Project-PPAS" serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac." />
        <HomeFooter />
      </div>
    </div>
  );
}
