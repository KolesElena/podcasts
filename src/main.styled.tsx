import styled from 'styled-components';

export const StyledBox = styled.div<{ width: string }>`
  display: block;
  width: ${(props) => props.width};
  min-width: ${(props) => props.width};
  margin: 0 30px;
  border-radius: 4px;
  height: fit-content;
  overflow-wrap: break-word;
  padding: 10px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;

export const StyledText = styled.div`
  font-weight: bold;
  margin: 10px;
`;

export const StyledAuthor = styled.div`
  font-style: italic;
  margin: 10px;
`;

export const StyledDescription = styled.div`
  font-style: italic;
  margin: 10px;
`;

export const Loader = styled.div`
  width: 15px;
  height: 15px;
  background: #1560BD;
  border-radius: 50%;
  border: 5px solid #A7C7E7;
`;

export const FlexBox = styled.div<{ justifyContent: string }>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  margin: 30px 30px 10px;
  align-items: center;
`;
