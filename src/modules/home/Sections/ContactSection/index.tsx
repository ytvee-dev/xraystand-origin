import React, {type ReactElement} from "react";
import { useForm, ValidationError } from '@formspree/react';
import type {HomeSection} from "../../types";
import "./style.css";

interface ContactSectionProps {
    content: HomeSection;
    lang: 'kz' | 'ru';
}

const FORM_ID = import.meta.env.VITE_FROMSPREE_ID ?? '123xyz';

const i18n = {
    ru: {
        nameText: "Имя",
        namePlaceholder: "Ваше имя",
        phoneText: "Телефон",
        phonePlaceholder: "Ваш телефон",
        commentText: "Ваш вопрос",
        commentPlaceholder: "Ваш вопрос...",
        buttonText: "Запросить демонстрацию",
    },
    kz: {
        nameText: "Аты-жөні",
        namePlaceholder: "Атыңызды енгізіңіз",
        phoneText: "Телефон",
        phonePlaceholder: "Телефоныңыз",
        commentText: "Сұрақ/пікір",
        commentPlaceholder: "Сұрағыңызды жазыңыз...",
        buttonText: "Демонстрацияға өтініш беру",
    },
} as const;

const IconPhone = () => (
    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M24.5 0C37.7548 0 48.5 10.7452 48.5 24C48.5 37.2548 37.7548 48 24.5 48C11.2452 48 0.5 37.2548 0.5 24C0.5 10.7452 11.2452 0 24.5 0Z"
            fill="#EFFA7A"/>
        <path
            d="M24.5 0C37.7548 0 48.5 10.7452 48.5 24C48.5 37.2548 37.7548 48 24.5 48C11.2452 48 0.5 37.2548 0.5 24C0.5 10.7452 11.2452 0 24.5 0Z"
        />
        <path d="M34.5 38H14.5V10H34.5V38Z"/>
        <g clipPath="url(#clip0_762_2833)">
            <path
                d="M20.9414 14.4618C20.6406 13.7353 19.8477 13.3485 19.0898 13.5556L15.6523 14.4931C14.9727 14.6806 14.5 15.2978 14.5 16.0009C14.5 25.6649 22.3359 33.5009 32 33.5009C32.7031 33.5009 33.3203 33.0282 33.5078 32.3485L34.4453 28.911C34.6523 28.1532 34.2656 27.3603 33.5391 27.0595L29.7891 25.497C29.1523 25.2313 28.4141 25.4149 27.9805 25.9501L26.4023 27.8759C23.6523 26.5751 21.4258 24.3485 20.125 21.5985L22.0508 20.0243C22.5859 19.5868 22.7695 18.8524 22.5039 18.2157L20.9414 14.4657V14.4618Z"
                fill="#0D0D0D"/>
        </g>
        <defs>
            <clipPath id="clip0_762_2833">
                <path d="M14.5 13.5H34.5V33.5H14.5V13.5Z" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

const IconEmail = () => (
    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M24.5 0C37.7548 0 48.5 10.7452 48.5 24C48.5 37.2548 37.7548 48 24.5 48C11.2452 48 0.5 37.2548 0.5 24C0.5 10.7452 11.2452 0 24.5 0Z"
            fill="#EFFA7A"/>
        <path
            d="M24.5 0C37.7548 0 48.5 10.7452 48.5 24C48.5 37.2548 37.7548 48 24.5 48C11.2452 48 0.5 37.2548 0.5 24C0.5 10.7452 11.2452 0 24.5 0Z"
        />
        <path d="M34.5 38H14.5V10H34.5V38Z"/>
        <g clipPath="url(#clip0_762_2842)">
            <path
                d="M16.375 16C15.3398 16 14.5 16.8398 14.5 17.875C14.5 18.4648 14.7773 19.0195 15.25 19.375L23.75 25.75C24.1953 26.082 24.8047 26.082 25.25 25.75L33.75 19.375C34.2227 19.0195 34.5 18.4648 34.5 17.875C34.5 16.8398 33.6602 16 32.625 16H16.375ZM14.5 20.375V28.5C14.5 29.8789 15.6211 31 17 31H32C33.3789 31 34.5 29.8789 34.5 28.5V20.375L26 26.75C25.1094 27.418 23.8906 27.418 23 26.75L14.5 20.375Z"
                fill="#0D0D0D"/>
        </g>
        <defs>
            <clipPath id="clip0_762_2842">
                <path d="M14.5 13.5H34.5V33.5H14.5V13.5Z" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

const ContactSection: React.FC<ContactSectionProps> = ({content, lang}): ReactElement => {
    const t = i18n[lang] ?? i18n.ru;
    const [state, handleSubmit] = useForm(FORM_ID);

    const nameText = t.nameText;
    const namePlaceholder = t.namePlaceholder;
    const phoneText = t.phoneText;
    const phonePlaceholder = t.phonePlaceholder;
    const commentText = t.commentText;
    const commentPlaceholder = t.commentPlaceholder;
    const buttonText = t.buttonText;

    if (!content.content) return <></>;

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit(e);
    };

    if (state.succeeded) {
        return (
            <section id="home-contact" className="home-section contact-section">
                <div className='home-contacts-container'>
                    <div className='home-contacts-logo'>{content.title}</div>
                    <div className='home-contacts-text'>
                        <div className='home-contacts-title'>Спасибо за заявку!</div>
                        <div className='home-contacts-label'>Мы свяжемся с вами в ближайшее время</div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="home-contact" className="home-section contact-section">
            <div className='home-contacts-container'>
                <div className='home-contacts-logo'>{content.title}</div>
                <div className='home-contacts-text'>
                    <div className='home-contacts-title'>{content.notificationLabel}</div>
                    <div className='home-contacts-label'>{content.description}</div>
                </div>

                <div className='home-contacts-data'>
                    <div className='home-contacts-item'>
                        <div className='home-contacts-item-icon'>
                            <IconPhone/>
                        </div>
                        <div className='home-contacts-item-text'>
                            <p>{content.content[0].title}</p>
                            <p>{content.content[0].description}</p>
                        </div>
                    </div>

                    <div className='home-contacts-item'>
                        <div className='home-contacts-item-icon'>
                            <IconEmail/>
                        </div>
                        <div className='home-contacts-item-text'>
                            <p>{content.content[1].title}</p>
                            <p>{content.content[1].description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='form-container'>
                <form className="home-form" onSubmit={handleFormSubmit} noValidate>
                    <label className="home-form-field">
                        <span className="home-form-label">{nameText}</span>
                        <input
                            className="home-form-input"
                            type="text"
                            name="name"
                            placeholder={namePlaceholder}
                            required
                        />
                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                        />
                    </label>

                    <label className="home-form-field">
                        <span className="home-form-label">{phoneText}</span>
                        <input
                            className="home-form-input"
                            type="tel"
                            name="phone"
                            placeholder={phonePlaceholder}
                            required
                        />
                        <ValidationError 
                            prefix="Phone" 
                            field="phone"
                            errors={state.errors}
                        />
                    </label>

                    <label className="home-form-field">
                        <span className="home-form-label">{commentText}</span>
                        <textarea
                            className="home-form-textarea"
                            name="source"
                            placeholder={commentPlaceholder}
                            rows={4}
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </label>

                    <button className="home-form-cta" type="submit" disabled={state.submitting}>
                        <span>{state.submitting ? "Отправка..." : buttonText}</span>
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.7063 6.70859C14.0969 6.31797 14.0969 5.68359 13.7063 5.29297L8.70625 0.292969C8.31563 -0.0976562 7.68125 -0.0976562 7.29063 0.292969C6.9 0.683594 6.9 1.31797 7.29063 1.70859L10.5875 5.00234H1C0.446875 5.00234 0 5.44922 0 6.00234C0 6.55547 0.446875 7.00234 1 7.00234H10.5844L7.29375 10.2961C6.90312 10.6867 6.90312 11.3211 7.29375 11.7117C7.68437 12.1023 8.31875 12.1023 8.70938 11.7117L13.7094 6.71172L13.7063 6.70859Z"
                                fill="#0D0D0D"/>
                        </svg>
                    </button>

                    {state.errors && Object.keys(state.errors).length > 0 && (
                        <p className="form-error">
                            Произошла ошибка при отправке. Попробуйте еще раз.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactSection;