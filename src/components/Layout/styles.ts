import styled from 'styled-components';

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UI - User Info



  export const Grid = styled.div`

  @media (min-width: 850px){
    display: grid;
    grid-template-columns: 71px 240px auto 230px;
    grid-template-rows: 46px auto 52px;
    grid-template-areas:
      'SL SN CI CI'
      'SL CL CD UL'
      'SL UI CD UL';
    height: 100vh;
  }

  @media (max-width: 850px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 43px auto 52px;
    grid-template-areas:
      'CI'
      'CD'
      'CD';
    height: 100vh;

    overflow: hidden;
  }
`;


