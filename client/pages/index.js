import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='index_container'>
      <img className='index_background_cover' src="https://i.ibb.co/JtJ1GpY/Homepage.png" alt='cover-pic'/>
      <div className='index_heading_line1'>Do you have what it takes to be &nbsp;<div style={{color:'#C62f41'}}>Champion?</div> </div>
      {/* <div className='index_heading_line2'>
      <div className='index_heading_white'>to be Champion?</div>
      <div className='index_heading_red'>Champion?</div>
      </div> */}
    </div>
  );
}
