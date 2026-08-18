import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-bar">
      <div className="wrap breadcrumb-inner">
        <ol className="breadcrumb-list">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.label} className="breadcrumb-item">
                {item.href && !isLast ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
                )}
                {!isLast && <span className="breadcrumb-sep">/</span>}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
