import React from "react";
import { Link } from "react-router-dom";

const CustomDisclosureButton = ({ href, children, ...rest }) => {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
};

export default CustomDisclosureButton;
