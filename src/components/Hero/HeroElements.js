import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding-bottom: 2rem;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const HeroLeft = styled.div`
  flex: 1;
  padding: 5rem 0;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  animation: z 1s ease-in-out;

  @keyframes z {
    0% {
      margin-top: -1000px;
    }
    100% {
      margin-top: 0px;
    }
  }

  h1 {
    font-size: 2.2rem;
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 500;
  }

  h5 {
    font-size: 1.6rem;
    color: rgb(180, 180, 180);
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 18px;
    margin-top: 20px;
    color: rgb(180, 180, 180);
    opacity: 0.85;
  }

  @media screen and (max-width: 992px) {
    max-width: 100%;
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
    padding: 2rem 0;
    
    p {
      width: 100%;
      max-width: 500px;
    }
  }

  @media screen and (max-width: 580px) {
    h1 {
      font-size: 2.3rem;
    }
    p {
      font-size: 17px;
    }
  }

  @media screen and (max-width: 510px) {
    h1 {
      font-size: 2.1rem;
    }
    p {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 13px;
    }
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideIn 1s ease-in-out;

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 300px;
    max-height: 300px;
  }

  @media screen and (max-width: 480px) {
    max-width: 250px;
    max-height: 250px;
  }
`;

const ScrollAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  animation: ${ScrollAnimation} 2s linear 0s infinite;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;