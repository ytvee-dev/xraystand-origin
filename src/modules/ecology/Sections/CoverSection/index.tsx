import * as paths from "@modules/ecology/locales/path.json";
import "./style.css";

interface CoverSectionProps {
  content: {
    title: string;
  };
}

export default function CoverSection({ content }: CoverSectionProps) {
  return (
    <section className="coverSection">
        <img
          className="coverImage"
          src={paths.coverBg}
          alt=""
        />

        <div className="coverContent">
          <h1 className="title">{content.title}</h1>
        </div>
    </section>
  );
}