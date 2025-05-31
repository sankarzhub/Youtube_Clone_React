import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoGrid from "./components/VideoGrid";

export default function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <VideoGrid />
      </main>
    </>
  );
}
