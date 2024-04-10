import { useTranslations } from "next-intl";

export default function Home() {
  // const t = useTranslations("IndexPage");
  // const t = useTranslations("Index");
  const t = useTranslations("IndexPage");
  console.log(t);
  console.log(t("title"));

  return (
    <>
      <h1 className="text-4xl mb-4 font-semibold">{t("title")}</h1>
      <p>{t("description")}</p>
    </>
  );
}

// <div>
//   <h1 className="text-4xl mb-4 font-semibold">{t("title")}</h1>
//   <p>{t("description")}</p>
// </div>;
