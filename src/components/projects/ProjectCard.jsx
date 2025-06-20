import { useState, useEffect, useRef } from "react";
import ProjectDetailModal from "./ProjectDetailModal";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectCard({
  name,
  description,
  modules,
  technologies,
  image,
  url,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [smallImageData, setSmallImageData] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const generateSmallImage = async () => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = image;

      img.onload = () => {
        if (canvasRef.current) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");

          const smallWidth = 20;
          const smallHeight = (img.height / img.width) * smallWidth;
          canvas.width = smallWidth;
          canvas.height = smallHeight;

          ctx.drawImage(img, 0, 0, smallWidth, smallHeight);

          const smallImageUrl = canvas.toDataURL("image/jpeg", 0.1);
          setSmallImageData(smallImageUrl);
        }
      };
    };

    generateSmallImage();
  }, [image]);

  return (
    <>
      <div className="">
        <h2 className="mb-1">
          <span className="text-[15px] text-[#5565E8]">
            <a href={url} target=" _blank">
              {name}
            </a>
          </span>{" "}
          {"// _modules"}
        </h2>
        <div className="border-2 border-custom rounded-lg bg-[#011221]">
          <div className="flex flex-col">
            <div className="overflow-hidden relative">
              <canvas ref={canvasRef} className="hidden" />

              {(isImageLoading || smallImageData) && (
                <div
                  className="rounded-t-lg absolute inset-0 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: smallImageData
                      ? `url(${smallImageData})`
                      : "none",
                    backgroundColor: !smallImageData
                      ? "#1E293B"
                      : "transparent",
                    filter: "blur(20px)",
                    transform: "scale(1.1)",
                    opacity: isImageLoading ? 1 : 0,
                    transition: "opacity 0.4s ease-in-out",
                  }}
                />
              )}

              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: isImageLoading ? 0 : 1 }}
                className="max-h-[145px] object-cover w-full rounded-t-lg"
                src={image}
                onLoad={() => setIsImageLoading(false)}
                onError={() => {
                  setIsImageLoading(false);
                }}
                alt=""
              />
            </div>
            <div className="p-5 border-t-2 border-custom">
              <p className="line-clamp-3">{description}</p>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-[#1c2b3a] mt-3 rounded-md px-3 py-1 text-[#FFFFFF]"
              >
                view-details
              </button>
              <a
                href={url}
                target=" _blank"
                className="bg-[#1c2b3a] mt-3 cursor-pointer rounded-md px-3 py-1 ml-2 inline-flex gap-2 items-center text-[#FFFFFF]"
              >
                demo <i className="ri-external-link-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <ProjectDetailModal
            setIsOpen={setIsOpen}
            url={url}
            description={description}
            image={image}
            modules={modules}
            technologies={technologies}
            name={name}
          />
        )}
      </AnimatePresence>
    </>
  );
}
