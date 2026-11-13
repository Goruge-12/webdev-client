
import Link from "next/link";
import Image from "next/image";

export default function CourseCard({
  id,
  title,
  subtitle,
  image,
  onEdit,
  onDelete,
}: {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  onEdit?: () => void;
  onDelete?: () => void;
}) {
  return (
    <div className="wd-dashboard-course">
      <Link
        href={`/courses/${id}/home`}
        className="wd-dashboard-course-link"
      >
        <Image
          src={image}
          width={200}
          height={150}
          alt={title}
        />

        <div>
          <h5>{title}</h5>
          <p className="wd-dashboard-course-title">
            {subtitle}
          </p>
          <span className="btn btn-primary">Go</span>
        </div>
      </Link>

      <div className="mt-2">
        <button
          type="button"
          className="btn btn-warning me-2"
          onClick={onEdit}
        >
          Edit
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
