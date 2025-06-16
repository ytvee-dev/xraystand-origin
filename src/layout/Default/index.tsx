import Header from "@components/Header";
import { type ReactElement } from "react";
import "./style.css";

export interface IDefaultLayoutProps {
    children: ReactElement;
}

const DefaultLayout = ({ children }: IDefaultLayoutProps): ReactElement => {
    return (
        <div className="default-layout">
            <Header />
            <main>{children}</main>
            {/* <footer></footer> */}
        </div>
    );
};

export default DefaultLayout;
