"use client";

import React from "react";
import { Commet } from 'react-loading-indicators';

const Loading = () => {
  return (
    <div className="fixed w-full h-screen flex z-50 items-center justify-center bg-white bg-opacity-80">
      <Commet color="#4e46e5" size="medium" text="" textColor="" />
    </div>
  );
}

export default Loading;