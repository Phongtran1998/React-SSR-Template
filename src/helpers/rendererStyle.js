export default () => {
  return `
    body {
      margin: 0;
    }
    .loader {
      position: absolute;
      left: 50%;
      top: 30%;
      z-index: 1;
      width: 80px;
      height: 80px;
      margin: -75px 0 0 -75px;
      border: 8px solid #f3f3f3;
      border-radius: 50%;
      border-top: 8px solid #020c1c;
      -webkit-animation: spin 2s linear infinite;
      animation: spin 2s linear infinite;
    }

    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    #root {
      height: 100%;
      width: 100%;
    }
    .dimmed {
      height: 100%;
      width: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    }
  `;
};
