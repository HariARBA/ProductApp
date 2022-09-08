import styled from "styled-components";

export const LogoBox = styled.div`
  /* Adapt the colors based on primary prop */

 background: #1890ff;
 padding: 0.25em 1em;
 font-size: 2em;
 font-weight: bold;
 border-radius: 3px;
 color: white;

`;
export const ProductBox = styled.button`
  /* Adapt the colors based on primary prop */
  background: white;
  color: #1890ff;
  width: 100vh;
  display: flex;
  flex-direction:column;
  height: 3em;
  font-weight: bold;
  font-size: 1.2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 0px solid #1890ff;
  border-radius: 3px;
`;
export const Padding = styled.div`
  padding: 1em;
`;
export const HeaderStyle = styled.div`
display: flex; 
justify-content: space-between;

`;