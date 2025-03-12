"use client";
import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import LightGalleryComponent from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import comuna from "../../public/images/photography/comuna_man.jpg";
import green from "../../public/images/photography/green.jpg";
import jesus from "../../public/images/photography/jesus.jpg";
import lake from "../../public/images/photography/lake.jpg";
import luz from "../../public/images/photography/luz.jpg";
import { useRef } from "react";
import type { LightGallery } from "lightgallery/lightgallery";

const tabs = [
  {
    key: "all",
    display: "ALL",
  },
  {
    key: "colombia",
    display: "COLOMBIA",
  },
  {
    key: "virginia",
    display: "VIRGINIA",
  },
];

const images = [comuna, green, jesus, lake, luz];

export default function Photography() {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <div className="flex flex-col h-screen p-32">
      <main className="flex-1 flex flex-col">
        <div className="flex flex-col items-center w-full flex-1">
          <TabGroup className="w-full h-full flex flex-col">
            <TabList className="flex items-center gap-12 justify-center py-4 mb-8">
              {tabs.map((tab) => (
                <Tab key={tab.key}>
                  {({ selected }) => (
                    <span
                      className={
                        selected
                          ? "text-white text-lg"
                          : "text-stone-600 text-md"
                      }
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="flex-1 max-w-[900px] w-full mx-auto text-white">
              <TabPanel className="h-full">
                <Masonry
                  breakpointCols={2}
                  className="flex gap-4"
                  columnClassName=""
                >
                  {images.map((image, idx) => (
                    <Image
                      key={image.src}
                      src={image}
                      alt="placeholder"
                      className="my-4 hover:opacity-70 cursor-pointer"
                      onClick={() => {
                        lightboxRef.current?.openGallery(idx);
                      }}
                    />
                  ))}
                </Masonry>
                <LightGalleryComponent
                  onInit={(ref) => {
                    if (ref) {
                      lightboxRef.current = ref.instance;
                    }
                  }}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  dynamic
                  dynamicEl={images.map((image) => ({
                    src: image.src,
                    thumb: image.src,
                  }))}
                ></LightGalleryComponent>
              </TabPanel>
              <TabPanel className="h-full">Colombia</TabPanel>
              <TabPanel className="h-full">Virginia</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </main>
    </div>
  );
}
