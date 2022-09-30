import React from "react";

export const WarningBanner = () => {
  return (
    <div
      style={{
        borderRadius: 8,
        background: "rgba(255, 68, 0, 0.1)",
        color: "orangered",
        border: "1px solid orangered",
        padding: 20,
        fontWeight: "bold",
        marginBottom: 20,
      }}
    >
      Warning this application requires you to add "Hacksore#1984" as a friend
      and be invited to the Overlayed App{" "}
      <a
        style={{ fontSize: 20 }}
        href="https://github.com/Hacksore/overlayed/issues/2"
      >
        Read more here
      </a>
    </div>
  );
};
