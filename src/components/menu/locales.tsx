import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Lang, locales } from "../../i18n";

interface PropTypes {
  className?: string;
  locale: Lang;
  onLangChange: (lang: Lang) => void;
}

const Locales: React.FunctionComponent<PropTypes> = ({
  className,
  locale,
  onLangChange,
}: PropTypes) => {
  const { asPath } = useRouter();

  const handleLangChange = (lang: Lang) => () => onLangChange(lang);

  return (
    <ul className={className}>
      {locales.map((l, i) => (
        <li key={l}>
          <React.Fragment>
            {i > 0 && "|"}
            <span>
              {l === locale ? (
                <strong>{l}</strong>
              ) : (
                <Link href={asPath} locale={l}>
                  <a onClick={handleLangChange(l)}>{l}</a>
                </Link>
              )}
            </span>
          </React.Fragment>
        </li>
      ))}
    </ul>
  );
};

export default Locales;
