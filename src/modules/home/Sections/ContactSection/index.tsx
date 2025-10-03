import React, {type ReactElement} from "react";
import type {HomeContent} from "../../types";
import "./style.css";

interface ContactSectionProps {
    content: HomeContent;
}

const ContactSection: React.FC<ContactSectionProps> = ({content: _content}): ReactElement => {
    return (
        <section id="home-contact" className="home-section contact-section">
            ContactSection
        </section>
    );
};

export default ContactSection;