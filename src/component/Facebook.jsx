import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <ul>
          <li className="iso-pro">
            <span />
            <span />
            <span />
            <a
              href="https://www.facebook.com/profile.php?id=61563925216002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 320 512" className="svg">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
            <div className="text">Facebook</div>
          </li>

          <li className="iso-pro">
            <span />
            <span />
            <span />
            <a
              href="https://www.linkedin.com/in/surma-begam-tisha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 448 512" className="svg">
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.09 107 0 82.91 0 53.36A53.36 53.36 0 0153.36 0c29.55 0 53.64 24.09 53.64 53.36 0 29.55-24.09 53.64-53.16 53.64zM447.9 448h-92.4V302.4c0-34.7-.7-79.2-48.2-79.2-48.2 0-55.6 37.7-55.6 76.6V448h-92.4V148.9h88.7v40.8h1.3c12.4-23.5 42.6-48.2 87.6-48.2 93.6 0 110.8 61.6 110.8 141.7V448z" />
              </svg>
            </a>
            <div className="text">LinkedIn</div>
          </li>

          <li className="iso-pro">
            <span />
            <span />
            <span />
            <a
              href="https://wa.me/8801781540625"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 448 512" className="svg">
                <path d="M380.9 97.1C339-6.7 210.5-28 120.6 36.6 30.6 101.2 3.7 229.3 63.4 322.4L0 480l162.2-62.5c90.5 49.2 204.2 19.1 261.3-69.8 57.1-88.9 38.4-205.7-42.6-250.6zM224 438.4c-37.4 0-73.6-10.1-105.1-29.2l-7.5-4.5-96.3 37.1 38.4-93.7-4.9-7.7c-28.5-44.9-36.6-99.5-22.2-150.1 14.4-50.6 50.2-92.6 97.6-114.9 47.4-22.3 102.7-23.1 150.7-2.2 48 20.9 84.6 61.3 99.9 110.6 15.3 49.3 8.3 102.7-19.2 146.7-27.5 44-72.3 76.1-122.3 87.6-15.7 3.6-31.8 5.3-48.1 5.3z" />
              </svg>
            </a>
            <div className="text">WhatsApp</div>
          </li>
        </ul>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    max-width: fit-content;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    backdrop-filter: blur(15px);
    box-shadow:
      inset 0 0 20px rgba(255, 255, 255, 0.192),
      inset 0 0 5px rgba(255, 255, 255, 0.274),
      0 5px 5px rgba(0, 0, 0, 0.164);
    transition: 0.5s;
  }

  .card:hover {
    animation: ease-out 5s;
    background: rgba(173, 173, 173, 0.05);
  }

  .card ul {
    padding: 1rem;
    display: flex;
    list-style: none;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .card ul li {
    cursor: pointer;
  }

  .svg {
    transition: all 0.3s;
    /* if you find some problems change w - h : 30px*/
    padding: 1rem;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    color: [#7c2cc2];
    fill: currentColor;
    box-shadow:
      inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5),
      0 5px 5px rgba(0, 0, 0, 0.164);
  }

  .text {
    opacity: 0;
    border-radius: 5px;
    padding: 5px;
    transition: all 0.3s;
    color: [#7c2cc2];
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    z-index: 9999;
    box-shadow:
      -5px 0 1px rgba(153, 153, 153, 0.2),
      -10px 0 1px rgba(153, 153, 153, 0.2),
      inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5),
      0 5px 5px rgba(0, 0, 0, 0.082);
  }

  /*isometric prooyection*/
  .iso-pro {
    transition: 0.5s;
  }
  .iso-pro:hover a > .svg {
    transform: translate(15px, -15px);
    border-radius: 100%;
  }

  .iso-pro:hover .text {
    opacity: 1;
    transform: translate(25px, -2px) skew(-5deg);
  }

  .iso-pro:hover .svg {
    transform: translate(5px, -5px);
  }

  .iso-pro span {
    opacity: 0;
    position: absolute;
    color: [#7c2cc2];
    border-color: #25d366;
    box-shadow:
      inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5),
      0 5px 5px rgba(0, 0, 0, 0.164);
    border-radius: 50%;
    transition: all 0.3s;
    height: 60px;
    width: 60px;
  }

  .iso-pro:hover span {
    opacity: 1;
  }

  .iso-pro:hover span:nth-child(1) {
    opacity: 0.2;
  }

  .iso-pro:hover span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }

  .iso-pro:hover span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }
`;

export default Card;
