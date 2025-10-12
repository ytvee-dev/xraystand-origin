import React, {type ReactElement} from "react";
import type {CoverSectionProps} from "../../types";
import "./style.css";

const CoverSection: React.FC<CoverSectionProps> = ({content: _content}): ReactElement => {
    return (
        <section id="home-welcome" className="home-section cover-section">
            CoverSection
            <form
                action="https://formsubmit.co/tyanbz@gmail.com"
                method="POST"
            >
                <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_subject" value="Новая заявка с лендинга" />
                <input type="text" name="name" placeholder="Имя" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" placeholder="Сообщение" required />
                {/* honeypot */}
                <input type="text" name="_honey" style={{display:'none'}} tabIndex={-1} />
                <button type="submit">Отправить</button>
            </form>
        </section>
    );
};

export default CoverSection;