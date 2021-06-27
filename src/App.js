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
import { ReactComponent as CalendarIcon } from "./assets/calendar.svg";
import { ReactComponent as PhotosIcon } from "./assets/photos.svg";
import { ReactComponent as SettingsIcon } from "./assets/settings.svg";
import { ReactComponent as PaintIcon } from "./assets/paint.svg";
import { ReactComponent as ExplorerIcon } from "./assets/explorer.svg";
import { ReactComponent as AccountIcon } from "./assets/account.svg";
import { ReactComponent as PowerIcon } from "./assets/power.svg";
import MailIcon from "./assets/mail.png";
import CalculatorIcon from "./assets/calculator.png";
import ClockIcon from "./assets/clock.png";
import NotepadIcon from "./assets/notepad.png";
import FilesIcon from "./assets/films.png";
import { useState } from "react";

function WindowsApp({ Icon, isPng = false, text, ...props }) {
  return (
    <button
      className="flex flex-col items-center space-y-3 w-36 hover:bg-blue-100 rounded p-4"
      {...props}
    >
      {isPng ? (
        <img src={Icon} alt={text} style={{ width: "32px", height: "auto" }} />
      ) : (
        <Icon style={{ width: "32px", height: "auto" }} />
      )}
      <span className="text-sm">{text}</span>
    </button>
  );
}

function WindowsDialog({ isOpen, toggle }) {
  const style = {
    width: "58rem",
    transform: "translateX(-50%) translateY(175%)",
    transition: "transform 0.4s ease",
    bottom: "80px",
  };
  const openStyle = {
    ...style,
    transform: "translateX(-50%) translateY(0)",
  };

  return (
    <div
      className="absolute left-1/2 bg-gray-100 rounded-md z-20"
      style={isOpen ? openStyle : style}
    >
      <h2 className="font-medium pl-8 pt-8">Pinned</h2>
      <div className="divide-y-2">
        <div className="flex flex-wrap p-8">
          <WindowsApp Icon={EdgeBrowserIcon} text="Microsoft Edge" />
          <WindowsApp isPng Icon={MailIcon} text="Mail" />
          <WindowsApp Icon={CalendarIcon} text="Calendar" />
          <WindowsApp Icon={StoreIcon} text="Microsoft Store" />
          <WindowsApp Icon={PhotosIcon} text="Photos" />
          <WindowsApp Icon={SettingsIcon} text="Settings" />
          <WindowsApp isPng Icon={CalculatorIcon} text="Calculator" />
          <WindowsApp isPng Icon={ClockIcon} text="Alarms & Clock" />
          <WindowsApp isPng Icon={NotepadIcon} text="Nodepad" />
          <WindowsApp Icon={PaintIcon} text="Paint" />
          <WindowsApp
            onClick={toggle}
            Icon={ExplorerIcon}
            text="File Explorer"
          />
          <WindowsApp isPng Icon={FilesIcon} text="Films & TV" />
        </div>

        <div className="p-8 flex justify-between items-center">
          <div className="flex space-x-4 items-center">
            <div
              className="p-3 bg-gray-200 rounded-full"
              style={{ width: "fit-content" }}
            >
              <AccountIcon style={{ width: "26px", height: "auto" }} />
            </div>
            <span>Piyush</span>
          </div>
          <button>
            <PowerIcon
              style={{ width: "20px", height: "auto", fill: "#434343" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

function Folder({ name }) {
  return (
    <div className="flex items-center space-x-3 px-2">
      <i
        className="ms-Icon ms-Icon--FabricFolderFill text-yellow-400 text-xl"
        aria-hidden="true"
      />

      <span className="text-sm">{name}</span>
    </div>
  );
}

function TSFile({ name }) {
  return (
    <div className="flex items-center space-x-3 px-2">
      <i
        className="ms-Icon ms-Icon--TypeScriptLanguage text-blue-700 text-xl"
        aria-hidden="true"
      />
      <span className="text-sm">{name}</span>
    </div>
  );
}

function App() {
  const [iswindowsDialogOpen, setIsWindowsDialogOpen] = useState(false);
  const toggleWindowsDialog = () => setIsWindowsDialogOpen((old) => !old);

  return (
    <div className="overflow-hidden h-screen">
      <video
        autoPlay
        muted
        preload
        src="/video.webm"
        className="w-screen object-cover h-auto"
      />
      <WindowsDialog
        isOpen={iswindowsDialogOpen}
        toggle={toggleWindowsDialog}
      />
      <div
        className="absolute top-0 left-0 bg-gray-100 rounded-md pb-4"
        style={{ width: "40rem" }}
      >
        <div className="flex justify-between">
          <div className="flex items-center space-x-4 pl-4 py-2">
            <ExplorerIcon style={{ width: "20px", height: "auto" }} />
            <h2 className="text-sm">File Explorer</h2>
          </div>
          <div className="flex">
            <button className="p-2 px-3 text-xs hover:bg-gray-50">
              <i
                className="ms-Icon ms-Icon--ChromeMinimize"
                aria-hidden="true"
              />
            </button>
            <button className="p-2 px-3 text-xs hover:bg-gray-50">
              <i className="ms-Icon ms-Icon--Checkbox" aria-hidden="true" />
            </button>
            <button className="p-2 px-3 text-xs hover:bg-gray-50">
              <i className="ms-Icon ms-Icon--ChromeClose" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="border-b">
          <button className="px-3 py-0.5 text-sm bg-blue-700 text-white">
            File
          </button>
          <button className="px-3 py-0.5 text-sm">Share</button>
          <button className="px-3 py-0.5 text-sm">View</button>
        </div>
        <div className="px-2 flex">
          <div className="w-2/12">Quick access</div>
          <div className="w-10/12">
            {["node_modules", "controllers", "middlewares"].map((folder) => (
              <Folder name={folder} />
            ))}
            {["global.d.ts", "index.ts"].map((file) => (
              <TSFile name={file} />
            ))}
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 w-screen z-50">
        <nav className="relative w-full h-14 bg-gray-200 flex items-center justify-center px-6">
          <main className="flex space-x-6 items-center">
            <button onClick={toggleWindowsDialog}>
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
