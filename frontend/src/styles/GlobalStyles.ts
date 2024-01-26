import { createGlobalStyle } from 'styled-components';

const GlobalStylesAndReset = createGlobalStyle`
/* ---------------------------------- RESET --------------------------------- */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
}

button {
  cursor: pointer;
  font-family: var(--font-nunito);
}

/* ------------------------------ GLOBAL STYLES ----------------------------- */
:root {
    --color-primary: #F0A500;
    --color-primary-focus: #D0A600;
    --color-secondary: #533483;

    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;

    --color-sucess: #539165;
    --color-negative: #E94560;

    --font-weight-700: 700;
    --font-weight-600: 600;
    --font-weight-500: 500;
    --font-weight-400: 400;

    --title-size-1: 1rem;
    
    --font-size-0: 1.25rem;
    --font-size-1: 1rem;
    --font-size-2: 0.750rem;
    --font-size-3: 0.650rem;


    --font-itallic: italic;
    
    --border-radius: 4px;

    --font-nunito: 'Nunito', sans-serif;
}

body {
  font-family: var(--font-nunito);
  color: var(--color-grey-0);
  background-color: var(--color-grey-4);
}

/* ------------------------------- TYPOGRAPHY ------------------------------- */
h1,
h2,
h3 {
  font-weight: var(--font-weight-700);
  font-size: var(--title-size-1);
}
.font-size-0 {
  font-size: var(--font-size-0);
}

.font-size-1 {
  font-size: var(--font-size-1);
}

.font-size-2 {
  font-size: var(--font-size-2);
}

.font-size-3 {
  font-size: var(--font-size-3);
}

.font-bold {
  font-weight: var(--font-weight-700);
}

.font-color-primary {
  color: var(--color-primary);
}

.font-color-secondary {
  color: var(--color-secondary);
}

.font-color-gray-0 {
  color: var(--color-grey-0);
}

.font-color-gray-1 {
  color: var(--color-grey-1);
}

.font-color-gray-2 {
  color: var(--color-grey-2);
}

.font-color-gray-3 {
  color: var(--color-grey-3);
}

.font-color-gray-4 {
  color: var(--color-grey-4);
}`;
export { GlobalStylesAndReset };
