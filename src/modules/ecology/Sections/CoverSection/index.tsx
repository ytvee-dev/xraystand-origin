import * as paths from "@modules/ecology/locales/path.json";
import "./style.css";

interface CoverSectionProps {
  content: {
    title: string;
  };
}

export default function CoverSection({ content }: CoverSectionProps) {
  return (
    <section className="ecology-cover-section">
        <img
          className="ecology-cover-image"
          src={paths.coverBg}
          alt=""
        />

        <div className="ecology-cover-content">
          <h1 className="ecology-cover-title">{content.title}</h1>
        </div>
    </section>
  );
}