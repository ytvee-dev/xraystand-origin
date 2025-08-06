import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import './style.css';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', jsx);
SyntaxHighlighter.registerLanguage('typescript', tsx);

export const mdxComponents = {
    h1: ({ children }: { children: React.ReactNode }) => (
        <h1 className="doc-h1">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
        <h2 className="doc-h2">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
        <h3 className="doc-h3">{children}</h3>
    ),

    p: ({ children }: { children: React.ReactNode }) => (
        <p className="doc-p">{children}</p>
    ),

    ul: ({ children }: { children: React.ReactNode }) => (
        <ul className="doc-ul">{children}</ul>
    ),
    li: ({ children }: { children: React.ReactNode }) => (
        <li className="doc-li">{children}</li>
    ),

    code: ({
               inline,
               className,
               children,
               ...props
           }: {
        inline?: boolean;
        className?: string;
        children: React.ReactNode;
    }) => {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter
                // style={oneDark}
                language={match[1]}
                PreTag="div"
                className="doc-pre"
                {...props}
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },

    a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
        <a href={href} className="doc-link" target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    ),

    table: ({ children }: { children: React.ReactNode }) => (
        <table className="doc-table">{children}</table>
    ),
    th: ({ children }: { children: React.ReactNode }) => (
        <th className="doc-th">{children}</th>
    ),
    td: ({ children }: { children: React.ReactNode }) => (
        <td className="doc-td">{children}</td>
    ),

    hr: () => <hr className="doc-hr" />,
};
