import React from 'react';
import { Lottie } from 'lottie-react';
import loaderJson from './loader.json'; // your lottie file
import styles from './Loader.module.css';

function Loader({ isVisible }) {
  return (
    <div className={`${styles.loader} ${isVisible ? styles.show : styles.hide}`}>
      <Lottie animationData={loaderJson} loop />
    </div>
  );
}

export default Loader;