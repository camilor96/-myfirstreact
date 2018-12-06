import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');
//ReactDOM.render(que voy a renderizar, donde lo hare);
render(<Media type="video" title="¿Que es responsive Design" author="Camilo Rodriguez" image="./images/covers/responsive.jpg"/>, app);