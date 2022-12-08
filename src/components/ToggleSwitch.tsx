import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
const StyledLabelWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;
const StyledLabel = styled.label<{ checked: boolean }>`
    cursor: pointer;
    text-indent: -9999px;
    width: 70px;
    height: 35px;
    background: ${({ checked }) => (checked ? '#fff' : '#000')};
    display: block;
    border-radius: 100px;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        left: ${({ checked }) => (checked ? '5px' : 'calc(55% - 5px)')};
        top: 2px;
        width: 30px;
        height: 30px;
        background: #1bbb55;
        border-radius: 90px;
        transition: 0.3s;
    }
`;

export default function ToggleSwitch() {
    const [switchState, setSwitchState] = useState(true);
    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        console.log('---', e.target.checked);
        setSwitchState(!switchState);
    }
    return (
        <StyledLabelWrap>
            <StyledLabel htmlFor="checkbox" checked={switchState}>
                <input id="checkbox" type="checkbox" checked={switchState} onChange={handleOnChange} />
            </StyledLabel>
        </StyledLabelWrap>
    );
}
