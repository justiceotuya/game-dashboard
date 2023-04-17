import React, { useRef, useState } from 'react';
import { runFunctionWhenSpaceOrEnterIsClicked } from '../../utils';

export interface IDropDownItemProps {
    onClick?: ((event: React.MouseEvent) => void) | undefined;
    text: string;

    color?: string;

    disabled?: boolean;
}

export interface IDropDownProps {
    children: React.ReactElement<IDropDownItemProps> | React.ReactElement<IDropDownItemProps>[];
    /**
     * controls if the dropdown is visible or not
     */
    isVisible?: boolean;
    /**
     * position of the drop down.  remember to make the parents positioning relative;
     */
    position?: 'TOP_LEFT' | 'TOP_CENTER' | 'TOP_RIGHT' | 'BOTTOM_RIGHT' | 'BOTTOM_CENTER' | 'BOTTOM_LEFT' | undefined;
    /**
     * style attribute to expose
     */
    style?: Record<string, unknown>;

    // onClick: (e: React.MouseEvent) => void;

    /**
     * for styling the position of the drop down. thi is important because so
     * people will not forget to make the parent of the drop down relative
     */
    className?: string;
    disabled?: boolean;
}

export const DropDownItem: React.FC<IDropDownItemProps> = (props: IDropDownItemProps) => {
    const { onClick, text, color, disabled = false } = props;

    const handleKeyPress = (e: React.KeyboardEvent) => {
        !disabled && onClick && runFunctionWhenSpaceOrEnterIsClicked(e, onClick);
    };

    const handleClick = (e: React.MouseEvent) => !disabled && onClick && onClick(e);

    return (
        <li
            data-item={text}
            // disabled={disabled}
            onClick={handleClick}
            onKeyPress={handleKeyPress}
            color={color}
            tabIndex={0}
            className='text-sm'
        >
            <p>{text}</p>
        </li>
    );
};

export const DropDown: React.FC<IDropDownProps> = (props: IDropDownProps) => {
    const { children, position, style, className, disabled } = props;

    const node = useRef<HTMLDivElement>(null);

    const [open, setOpen] = useState(false);

    const handleClickOutside = (e: any) => {
        if (node.current && node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setOpen(false);
    };

    React.useEffect(() => {
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    const handleClickDropDown = (event: React.MouseEvent) => {
        event.stopPropagation();
        !disabled && setOpen(!open);
    };

    const onKeyPress = (e: any) => {
        const enterOrSpace =
            e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar' || e.which === 13 || e.which === 32;
        if (enterOrSpace) {
            e.preventDefault();
            handleClickDropDown(e);
        }
    };

    return (
        <div
            // isVisible={open}
            // position={position}
            style={style}
            onClick={handleClickDropDown}
            onKeyPress={onKeyPress}
            ref={node}
            role="button"
            tabIndex={0}
            // disabled={disabled}
            className='absolute inset-0 h-full w-full rounded-xl hover:bg-color-white flex z-10'
        >
            <ul className={`${className} bg-color-white shadow-sm rounded-xl min-w-[164px] absolute`}>{children}</ul>
        </div>
    );
};
