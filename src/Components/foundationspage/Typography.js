import React from "react";
import { desktopData, mobileData } from "./TypographyItem";

const Typography = () => {
  return (
    <div className="w-5/6 mb-60">
      <div className="pb-2">
        <h2 className="2xl:text-3xl xl:text-2xl sm:text-xl font-bold">
          Typography
        </h2>
      </div>
      <div className="pb-4 w-1/2">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Clear font, consistent heading styles, and structured paragraphs help
          in creating a visual pattern for users interacting with the
          application.
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-4">
          This page lists the types of fonts used in the DIGIT platform. It is
          recommended to use the specific styles outlined below to ensure
          consistency in the application interface.
        </p>
      </div>
      <div className="pb-4 w-1/2">
        <h2 className="sm:text-xl font-bold">Guidelines</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Follow the prescribed typography style guidelines as given below to
          create clear hierarchies, organize information and guide the users
          through the interface.
        </p>
      </div>
      <div className="grid grid-cols-2 pb-4">
        <div className="mobile">
          <div className="py-2">
            <h4 className="text-xl font-semibold">Mobile</h4>
          </div>
          {mobileData.map((data) => {
            return (
              <div
                style={{ paddingTop: `${data.topPading}` }}
                className="py-2"
                key={data.id}
              >
                <h1
                  style={{
                    fontSize: `${data.fontsize}`,
                    fontWeight: `${data.fontWeight}`,
                    color: `${data.fontColor}`,
                  }}
                >
                  {data.item}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="desktop">
          <div className="py-2">
            <h4 className="text-xl font-semibold">Desktop</h4>
          </div>
          {desktopData.map((data) => {
            return (
              <div
                style={{ paddingTop: `${data.topPading}` }}
                className="py-2"
                key={data.id}
              >
                <h1
                  style={{
                    fontSize: `${data.fontsize}`,
                    fontWeight: `${data.fontWeight}`,
                    color: `${data.fontColor}`,
                  }}
                >
                  {data.item}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pb-4 w-1/2">
        <h2 className="sm:text-xl font-bold">Font</h2>
        <ul className="list-disc list-inside">
          <li className="py-2">
            All applications and services on the DIGIT platform must use the
            Roboto Condensed and Roboto font.
          </li>
          <li className="py-2">
            {" "}
            Alternate typefaces like Helvetica or Arial for applications
            available on different domains.
          </li>
        </ul>
      </div>
      <div className="pb-4 w-1/2">
        <h2 className="sm:text-xl font-bold">Headings</h2>
        <ul className="list-disc list-inside">
          <li className="py-2">
            All headings should follow the sentence case.
          </li>
          <li className="py-2">
            Heading tags like {"<h1> or <h2>"} should be used wherever
            applicable to create the heading tags on the page.Use specific
            heading style classes to provide the users with a consistent visual
            hierarchy{" "}
          </li>
          <li className="py-2">
            Use the heading with a caption above to indicate that the listed
            heading is part of a specific group.
          </li>
        </ul>
      </div>
      <div className="pb-4 w-1/2">
        <h2 className="sm:text-xl font-bold">Paragraphs</h2>
        <ul className="list-disc list-inside">
          <li className="py-2">
            Apply the default font size for paragraphs as 16px for small screens
            and 19px for large screens.
          </li>
          <li className="py-2">Use 24px font size for lead paragraphs.</li>
        </ul>
      </div>
      <div className="pb-4 w-1/2">
        <h2 className="sm:text-xl font-bold">Links</h2>
        <ul className="list-disc list-inside">
          <li className="py-2">
            Make use of lists to provide users with specific information and
            details in context.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Typography;
