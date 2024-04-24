import styled from 'styled-components';

export const StyledEpisodesCounter = styled.div`
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-weight: bold;
  align-content: center;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;

export const StyledTable = styled.table`
  display: block;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;

export const StyledHead = styled.th`
  width: 100%;
  padding: 1em;
`;

export const StyledRow = styled.tr`
  border: 1px solid #D3D3D3;
  text-align: left;
  &:nth-child(even) {
    background-color: #F8F8F8;
  }
`;

export const StyledCell = styled.td`
  &:first-child {
    color: #1560BD;
    cursor: pointer;
  }
  padding: 0.5em 1em;
`;
