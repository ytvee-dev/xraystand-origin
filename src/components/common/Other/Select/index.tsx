import {
    type CSSProperties,
    type ReactElement,
    useEffect,
    useState,
    type MouseEvent,
    type ReactNode,
} from "react";
import "./style.css";

export enum SelectSizes {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}

export interface ISelectOption {
    value: any;
    label: ReactNode;
    disabled?: boolean;
}

export interface ISelectProps {
    value?: string;
    options: ISelectOption[];
    onChange: (selectedOption: ISelectOption) => void;
    className?: string;
    disabled?: boolean;
    placeholder?: string;
    size?: SelectSizes;
    style?: CSSProperties;
}

const SELECT_DEFAULT_CLASSNAME: string = "select-option";
const SELECT_PLACEHOLDER_DEFAULT: string = "Select any option";

const Select = ({
    value,
    options,
    onChange,
    className,
    disabled = false,
    placeholder = SELECT_PLACEHOLDER_DEFAULT,
    size,
    style,
}: ISelectProps): ReactElement => {
    const findOptionByValue = (
        value: string | undefined,
    ): ISelectOption | undefined => {
        return options.find((option) => option.value === value);
    };

    const [selectedOption, setSelectedOption] = useState<
        ISelectOption | undefined
    >(findOptionByValue(value));

    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const newSelected = findOptionByValue(value);

        if (newSelected && newSelected.value !== selectedOption?.value) {
            setSelectedOption(newSelected);
        }
    }, [value, options, selectedOption?.value]);

    const handleOpen = (event: MouseEvent<HTMLButtonElement>): void => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleListClick = (event: MouseEvent<HTMLDivElement>): void => {
        const target = event.target as HTMLElement;
        const optionElement = target.closest(`.${SELECT_DEFAULT_CLASSNAME}`);
        if (!optionElement) {
            return console.error("Option element not found");
        }

        const selectedValue = optionElement.getAttribute("data-value");
        const option = options.find((opt) => opt.value === selectedValue);

        if (!option) {
            return console.error("Option with matching value not found");
        }

        setSelectedOption(option);
        onChange(option);

        setIsOpen(false);
        event.stopPropagation();
    };

    const handleClickOutside = (): void => {
        setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown-container">
            <button
                type="button"
                className={`${SELECT_DEFAULT_CLASSNAME} ${className} ${size} ${isOpen ? "opened" : ""}`}
                onClick={handleOpen}
                disabled={disabled}
                style={style}
            >
                {selectedOption?.label || placeholder}
            </button>

            {isOpen && (
                <div className="dropdown-list" onClick={handleListClick}>
                    {options.map((option: ISelectOption) => (
                        <div
                            data-value={option.value}
                            key={option.value}
                            className={`${SELECT_DEFAULT_CLASSNAME} ${className} ${size} ${
                                selectedOption?.value === option.value
                                    ? "selected"
                                    : ""
                            }`}
                            style={style}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
