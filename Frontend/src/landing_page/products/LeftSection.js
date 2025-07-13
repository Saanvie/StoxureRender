import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
}) {
  return (
    <div className="container border-bottom border-2 pb-3"   style={{ marginTop: "5rem", marginBottom: "6rem" }}>
      <div className="row">
        <div className="col-6">
          <img
            src={imageURL}
            className="img-fluid rounded border border-1 mb-4 pb-2"
            alt={productName}
          />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
