import React, { useState, useEffect } from "react";

export const useToggle = (val = false, fn) => {
  const [isActive, setActive] = useState(false);

  const set = () => {
    setActive(true);

    if (val) {
      fn(true);
    }
  };

  return set();
};
