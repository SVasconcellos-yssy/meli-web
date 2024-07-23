import React from "react";
import { Link} from "react-router-dom";
import useBreadcrumbStore from "../../store/useBreadCrumbStore";
import "./Breadcrumb.scss";

function Breadcrumb() {
  const { breadcrumb } = useBreadcrumbStore((state) => state);



  
  return (
    <div className="breadcrumb__path">
      {breadcrumb.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && " / "}
          {index < breadcrumb.length - 1 ? (
            <Link to={`/items?search=${item}`}>{item}</Link>
          ) : (
            item
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Breadcrumb;
