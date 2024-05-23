import styled from 'styled-components';

export const EditorOverlay = styled.div<{ isOpen: boolean }>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
`;

export const EditorFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    height: 60px;
    background-color: #ffffff;
`;

export const EditorHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #ffffff;
    padding: 1rem;
    height: 60px;
`;