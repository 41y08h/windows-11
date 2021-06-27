import { ReactComponent as WindowsIcon } from "./assets/windows.svg";
import { ReactComponent as SearchIcon } from "./assets/search.svg";
import { ReactComponent as BoxesIcon } from "./assets/boxes.svg";
import { ReactComponent as RectanglesIcon } from "./assets/rectangles.svg";
import { ReactComponent as EdgeBrowserIcon } from "./assets/edge-browser.svg";
import { ReactComponent as VsCodeIcon } from "./assets/vscode.svg";
import { ReactComponent as StoreIcon } from "./assets/store.svg";
import { ReactComponent as UpIcon } from "./assets/up.svg";
import { ReactComponent as InternetIcon } from "./assets/internet.svg";
import { ReactComponent as SoundIcon } from "./assets/sound.svg";
import { ReactComponent as NotificationIcon } from "./assets/notification.svg";

function App() {
  function openWindowsModal() {}

  return (
    <div className="overflow-hidden h-screen">
      <video
        autoPlay
        muted
        preload
        src="/video.webm"
        className="w-screen object-cover h-auto"
      />
      <footer className="fixed bottom-0 left-0 w-screen">
        <nav className="relative w-full h-14 bg-gray-200 flex items-center justify-center px-6">
          <main className="flex space-x-6 items-center">
            <button onClick={openWindowsModal}>
              <WindowsIcon />
            </button>
            <button>
              <SearchIcon />
            </button>
            <button>
              <RectanglesIcon />
            </button>
            <button>
              <BoxesIcon />
            </button>
            <button>
              <EdgeBrowserIcon />
            </button>
            <button>
              <VsCodeIcon />
            </button>
            <button>
              <StoreIcon />
            </button>
          </main>
          <aside
            className="absolute right-6"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <div className="flex items-center space-x-4">
              <UpIcon style={{ width: "14px", height: "auto" }} />
              <InternetIcon style={{ width: "14px", height: "auto" }} />
              <SoundIcon style={{ width: "14px", height: "auto" }} />
              <span className="text-xs font-medium">ENG</span>
              <div className="flex flex-col items-center text-xs">
                <span>05:13</span>
                <span>26-06-2021</span>
              </div>
              <NotificationIcon style={{ width: "14px", height: "auto" }} />
            </div>
          </aside>
        </nav>
      </footer>
    </div>
  );
}

export default App;
