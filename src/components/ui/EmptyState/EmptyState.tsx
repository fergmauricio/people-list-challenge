import "./EmptyState.scss";

interface EmptyStateProps {
  title: string;
  description?: string;
  variant?: "default" | "search";
}

export const EmptyState = ({
  title,
  description,
  variant = "default",
}: EmptyStateProps) => {
  return (
    <div className={`empty-state empty-state--${variant}`}>
      <div className="empty-state__icon">🔍</div>
      <h3 className="empty-state__title">{title}</h3>
      {description && <p className="empty-state__description">{description}</p>}
    </div>
  );
};
