import Link from "next/link";
import React from "react";
import { Section } from "../../helpers/types";
import { Lang, menu } from "../../i18n";

interface PropTypes {
  active: Section["id"];
  className?: string;
  locale: Lang;
}

const Items: React.FunctionComponent<PropTypes> = ({
  active,
  className,
  locale,
}: PropTypes) => {
  const items = menu[locale];

  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.id}>
          <Link href={item.href}>
            {active === item.id ? (
              <strong>{item.label}</strong>
            ) : (
              <a>{item.label}</a>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Items;
