import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #26282b;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 6rem;
  color: #fcfcfc;
`

export const Sphere = styled.div`
  width: 400px;
  height: 400px;
  padding: 50px;
  border: 3px solid #26282b;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 15px 15px rgba(0, 0, 0, 0.3),
    inset 0 15px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
