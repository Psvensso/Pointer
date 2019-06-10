declare module 'emotion-reset';

declare module '@emotion/styled/macro' {
    import styled from '@emotion/styled';
    export * from '@emotion/styled';
    export default styled;
  }

  declare module '@emotion/css/macro' {
    import styled from '@emotion/css';
    export * from '@emotion/css';
    export default css;
  }