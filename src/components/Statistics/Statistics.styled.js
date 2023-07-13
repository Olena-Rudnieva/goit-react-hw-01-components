import styled from 'styled-components';

export const Statistics = styled.section`
  width: 420px;
  border: 1px solid #e7e9fc;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08);
  border-radius: 8px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #e7e9fc;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08);
  width: 84px;
  background-color: #f4f4fd;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-weight: 600;
`;
