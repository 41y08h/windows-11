import { ReactComponent as ExplorerIcon } from "../assets/explorer.svg";
import Draggable from "react-draggable";

function Folder({ name }) {
  return (
    <button className="flex items-center space-x-3 px-2 hover:bg-blue-100 rounded w-full">
      <i
        className="ms-Icon ms-Icon--FabricFolderFill text-yellow-400 text-xl"
        aria-hidden="true"
      />

      <span className="text-sm">{name}</span>
    </button>
  );
}

function TSFile({ name }) {
  return (
    <button className="flex items-center space-x-3 px-2 hover:bg-blue-100 rounded w-full">
      <i
        className="ms-Icon ms-Icon--TypeScriptLanguage text-blue-700 text-xl"
        aria-hidden="true"
      />

      <span className="text-sm">{name}</span>
    </button>
  );
}

function ExplorerPaneItem({ iconName, text, ...props }) {
  return (
    <button
      className="flex space-x-2 items-center hover:bg-blue-100 p-1 w-full rounded"
      {...props}
    >
      <i className={`ms-Icon ms-Icon--${iconName}`} aria-hidden="true" />
      <span>{text}</span>
    </button>
  );
}

export default function Explorer({ isOpen, toggle }) {
  if (!isOpen) return null;

  return (
    <Draggable handle=".topbar-for-drag">
      <div
        className="absolute top-20 left-20"
        style={{
          width: "50rem",
          height: "30rem",
        }}
      >
        <div className="bg-gray-100 rounded-md pb-4 shadow animate__animated animate__fadeInUp h-full">
          <div className="flex">
            <div className="flex items-center space-x-4 pl-4 py-2 w-full topbar-for-drag cursor-move">
              <ExplorerIcon style={{ width: "20px", height: "auto" }} />
              <h2 className="text-sm">File Explorer</h2>
            </div>
            <div className="flex">
              <button
                onClick={toggle}
                className="p-2 px-3 text-xs hover:bg-gray-50"
              >
                <i
                  className="ms-Icon ms-Icon--ChromeMinimize"
                  aria-hidden="true"
                />
              </button>
              <button className="p-2 px-3 text-xs hover:bg-gray-50">
                <i className="ms-Icon ms-Icon--Checkbox" aria-hidden="true" />
              </button>
              <button
                onClick={toggle}
                className="p-2 px-3 text-xs hover:bg-gray-50"
              >
                <i
                  className="ms-Icon ms-Icon--ChromeClose"
                  aria-hidden="true"
                />
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
          <div className="px-3 flex py-4 space-x-4">
            <div className="w-2/12 text-xs">
              <ExplorerPaneItem iconName="Recent" text="Quick access" />
              <ExplorerPaneItem iconName="TVMonitor" text="Desktop" />
              <ExplorerPaneItem iconName="Download" text="Downloads" />
              <ExplorerPaneItem iconName="DocumentSet" text="Documents" />
              <ExplorerPaneItem iconName="PictureCenter" text="Pictures" />
              <ExplorerPaneItem iconName="ThisPC" text="This PC" />
              <ExplorerPaneItem iconName="FabricNetworkFolder" text="Network" />
            </div>
            <div className="w-10/12">
              {["controllers", "node_modules", "middlewares", "routes"].map(
                (folder) => (
                  <Folder name={folder} />
                )
              )}
              {["global.d.ts", "index.ts"].map((file) => (
                <TSFile name={file} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
