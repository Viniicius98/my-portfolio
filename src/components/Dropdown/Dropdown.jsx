import React, { useState } from "react";
import { DropdownContainer, Button, DropdownContent } from ".";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <Button onClick={toggleDropdown}>{title}</Button>
      {isOpen && <DropdownContent>{children}</DropdownContent>}
    </DropdownContainer>
  );
};

export default Dropdown;
