import React from "react";
import ContentLoader from "react-content-loader";

function generateContentLoader(loaderWidth, loaderHeight) {
  return (
    <ContentLoader
      key={Math.random()} // Use a unique key to avoid React warning about missing keys in lists
      width={loaderWidth}
      height={loaderHeight}
      viewBox={`0 0 ${loaderWidth} ${loaderHeight}`}
      speed={2}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="75%" height="150" />
      <rect x="0" y="160" rx="3" ry="3" width="150" height="10" />
      <rect x="0" y="180" rx="3" ry="3" width="200" height="10" />
    </ContentLoader>
  );
}

function CardSkeleton() {
  const loaderWidth = 400; // Customize the width of the loaders
  const loaderHeight = 200; // Customize the height of the loaders

  const numContentLoaders = 4; // Number of content loaders to generate

  return (
    <div>
      <div className="container my-5 text-center">
        <div className="d-flex justify-content-center">
          {Array.from({ length: numContentLoaders }).map((_, index) =>
            generateContentLoader(loaderWidth, loaderHeight)
          )}
        </div>
      </div>

       <div className="container my-5 text-center">
        <div className="d-flex justify-content-center">
          {Array.from({ length: numContentLoaders }).map((_, index) =>
            generateContentLoader(loaderWidth, loaderHeight)
          )}
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
