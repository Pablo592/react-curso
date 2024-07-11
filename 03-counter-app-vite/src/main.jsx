import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp} from './HelloWorldApp'
import { FirsApp } from './FirsApp';
import './styles.css';


ReactDOM.createRoot( document.getElementById('root') ).render( 
    <React.StrictMode>
        <HelloWorldApp />
        <FirsApp title="Hola Buenos dias" subtitle="Como andas" pasoUnNumero={123} />
    </React.StrictMode>
);