import { useRef, useEffect, useState } from "react";
import logo from "@/assets/html.svg";
import logo2 from "@/assets/css.svg";
import logo3 from "@/assets/js2.svg";
import logo4 from "@/assets/bootstrap.svg";
import logo5 from "@/assets/react.svg";
import logo6 from "@/assets/redux.svg";
import logo7 from "@/assets/tailwind.svg";
import logo8 from "@/assets/scss.svg";
import logo9 from "@/assets/mui.svg";
import logo10 from "@/assets/framer.svg";
import logo11 from "@/assets/router.svg";
import logo12 from "@/assets/responsive.svg";
import logo13 from "@/assets/debug.svg";

export default function ActiveFile({
  fileName,
  content,
  activeFilePath,
  skills,
}) {
  // const fileRef = useRef()
  // const hehe = useRef()
  // const [height, setHeight] = useState(5)
  // useEffect(() => {
  //     const newHeight = Math.floor(fileRef.current?.offsetHeight / hehe.current?.offsetHeight);
  //     if (height !== newHeight) {
  //         setHeight(newHeight);
  //     }
  //     console.log('run', height)
  // }, [activeFilePath])
  const logos = [
    logo,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
  ];
  return (
    <div className="flex-1 w-1/2 lg:w-full h-full lg:h-auto border-r-2 lg:mt-8 lg:border-none border-custom flex flex-col">
      <div className="border-b-2 border-custom lg:border-none">
        <h2 className="flex items-center lg:hidden justify-between gap-10 w-fit pl-4 pr-2  border-r-2 border-custom py-1">
          {fileName}.js{" "}
          <i className="ri-close-line text-xl text-[#607B96] hover:text-[#FFFFFF]"></i>
        </h2>
        <h2 className="mb-7 lg:mb-2 text-[16px] px-5 hidden lg:block">
          <span className="text-[#FFFFFF]">
            {"//"} {activeFilePath.folder}
          </span>{" "}
          / {activeFilePath.file}
        </h2>
      </div>
      <div className="flex py-4 px-5">
        {/* <div>
                    {new Array(height).fill().map((a, i) => <div key={i} ref={hehe} className="mx-5">{i + 1}</div>)}
                </div> */}
        <div key={activeFilePath} className="overflow-auto custom-scroll">
          <div className="flex-1 lg:text-[16px] mb-5">{content && content}</div>
          <div className="text-[14px] flex flex-col">
            {skills?.map((a, i) => (
              <div key={i} className="flex gap-3">
                <img
                  className={`opacity-[.6] mb-2 ${
                    activeFilePath.file === "tech-stack" ? "block" : "hidden"
                  }`}
                  src={logos[i]}
                  alt=""
                />{" "}
                <span className="">
                  <span className="">{a.name}</span>{" "}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
