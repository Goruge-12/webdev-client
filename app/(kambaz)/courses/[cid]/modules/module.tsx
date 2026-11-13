
import type { ReactNode } from "react";

export default function Module({
  title,
  children,
  onEdit,
  onDelete,
}: {
  title: string;
  children?: ReactNode;
  onEdit?: () => void;
  onDelete?: () => void;
}) {
  return (
    <li className="wd-module">
      <div className="wd-title">
        <span>{title}</span>

        <span className="float-end">
          <button
            type="button"
            onClick={onEdit}
            aria-label={`Edit ${title}`}
            className="btn btn-sm btn-outline-secondary me-2"
          >
            ✏️
          </button>

          <button
            type="button"
            onClick={onDelete}
            aria-label={`Delete ${title}`}
            className="btn btn-sm btn-outline-danger"
          >
            🗑️
          </button>
        </span>
      </div>

      <ul className="wd-lessons">{children}</ul>
    </li>
  );
}
