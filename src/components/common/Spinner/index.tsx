import {type ReactElement} from "react";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import './style.css';

const Spinner = (): ReactElement => {
    return (
        <div className='spinner-wrapper'>
            <SpriteIcon iconId={'footerLogoDark'} color={'red'} />
        </div>
    );
};

export default Spinner;
