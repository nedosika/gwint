import styled  from 'styled-components'

export const Container = styled.div`
    position: absolute;
    height: 150px;
    bottom: 10px;
    display: flex;
`

export const Card = styled.div`
  display: flex;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  margin-left: -50px;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  &:not(:first-child) {
    margin-left: -50px;
  }
  &:hover {
    transform: translateY(-20px) scale(1.3);
    transition: 0.4s ease-out;
  }
  &:hover ~ & {
    position: relative;
    left: 65px;
    transition: 0.4s ease-out;
  }
`