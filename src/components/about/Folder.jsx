import { useState } from "react";
import { files as data } from "../../util/professionalInfo";
import jslogo from "@/assets/js.svg";

export default function Folder({
  folderName,
  color,
  setActiveFilePath,
  activeFilePath,
}) {
  const [isOpen, setIsOpen] = useState(folderName === "skills"); //to basically open the first folder by default.
  const files = data[folderName];
  return (
    <div>
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full px-1 cursor-pointer"
      >
        <i
          className={`ri-arrow-drop-right-line text-2xl transition-transform duration-100 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        ></i>
        <i className={`ri-folder-3-fill mr-1 ${color}`}></i>
        <span className={`hover:text-[#FFFFFF]`}>{folderName}</span>
      </span>
      {isOpen &&
        files?.map((a, i) => (
          <div key={i} className="flex items-center ml-6 pl-3 gap-1 pb-1">
            <img className="w-4 h-4" src={jslogo} alt="" />
            <li
              onClick={() =>
                setActiveFilePath({ folder: folderName, file: a.name })
              }
              className={`list-none hover:text-[#FFFFFF] cursor-pointer ${
                activeFilePath.file === a.name && "text-[#FFFFFF]"
              }`}
            >
              {a.name}.js
            </li>
          </div>
        ))}
    </div>
  );
}
