import "./SkeletonLoader.scss";

interface SkeletonLoaderProps {
  type?: "card" | "table" | "text";
  count?: number;
}

export const SkeletonLoader = ({
  type = "text",
  count = 1,
}: SkeletonLoaderProps) => {
  const skeletons = Array.from({ length: count }, (_, i) => i);

  if (type === "table") {
    return (
      <div className="skeleton-table">
        {skeletons.map((i) => (
          <div key={i} className="skeleton-table__row">
            <div className="skeleton skeleton--text"></div>
            <div className="skeleton skeleton--text"></div>
            <div className="skeleton skeleton--text"></div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "card") {
    return (
      <div className="skeleton-cards">
        {skeletons.map((i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton skeleton--avatar"></div>
            <div className="skeleton skeleton--text"></div>
            <div className="skeleton skeleton--text skeleton--short"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {skeletons.map((i) => (
        <div key={i} className="skeleton skeleton--text"></div>
      ))}
    </>
  );
};
