import Header from "@/components/Header";
import Main from "@/components/Main";
import Popular from "@/components/popular";
import ShowProvider from "@/context/showContest";

export default function Home() {
  return (
    <>
    <ShowProvider>
      <Header />
      
      <div className="w-full h-[180px]"></div>
      <Popular/>
      <Main />
      </ShowProvider>  
    </>
  );
}
