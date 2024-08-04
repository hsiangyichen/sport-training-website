import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center text-center py-6 custom-font">
      <div className="flex items-center w-full justify-center">
        <div className="border-t-2 border-black flex-grow mr-6 sm:hidden"></div>
        <p className="text-sm mr-6">
          Copyright © 2023. Hong Kong Sky Sports Academy Limited. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
