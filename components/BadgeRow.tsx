interface BadgeItem {
  name: string;
  href?: string;
}

interface BadgeRowProps {
  label: string;
  items: BadgeItem[];
}

function Badge({ name, href }: BadgeItem) {
  const inner = (
    <>
      <span className="badge-logo" />
      {name}
    </>
  );

  if (href) {
    return (
      <a href={href} className="badge" target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return <span className="badge">{inner}</span>;
}

export default function BadgeRow({ label, items }: BadgeRowProps) {
  return (
    <div className="tag-row">
      <span className="tag-row-label">
        {label} <span>→</span>
      </span>
      <div className="tag-row-badges">
        {items.map((item) => (
          <Badge key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
