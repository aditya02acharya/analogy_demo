import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Breadcrumb = (props) => {
    const { title, children } = props;

    return (
    <div>
      {title ? <h1>{title}</h1> : null}
    </div>
  );
};

export default Breadcrumb;
