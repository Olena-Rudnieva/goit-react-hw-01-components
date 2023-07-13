import { styled } from 'styled-components';

export const Table = styled.table`
  width: 420px;
  border: 1px solid #e7e9fc;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08);
  border-radius: 8px;
  margin-top: 100px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const HeadItem = styled.th`
  width: 140px;
  border: 1px solid #2e2f42;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08);
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #e7e9fc;
`;

export const Item = styled.td`
  border: 3px solid #e7e9fc;
  padding-top: 10px;
  padding-bottom: 10px;
`;
