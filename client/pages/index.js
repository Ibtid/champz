import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='index_container'>
      <img
        className='index_background_cover'
        src='https://i.ibb.co/JtJ1GpY/Homepage.png'
        alt='cover-pic'
      />
      <div className='index_heading_line1'>
        <div>Do you have what it takes to </div>
        <div>
          be a <span style={{ color: '#C62f41' }}>Champion?</span>
        </div>
      </div>
    </div>
  );
}
