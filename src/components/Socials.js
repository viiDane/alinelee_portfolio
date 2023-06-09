import React, { useContext } from 'react';

import {
  ImFacebook,
  ImInstagram,
  ImPinterest,
  ImTwitter,
  ImYoutube,
} from 'react-icons/im'
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext); 
  return <div
             onMouseEnter={mouseEnterHandler}
             onMouseLeave={mouseLeaveHandler}  
             className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='https://facebook.com/' target='_blank'>
          <ImFacebook />
        </a>
      </li>
      <li>
        <a href='https://instagram.com/' target='_blank'>
          <ImInstagram />
        </a>
      </li>
      <li>
        <a href='https://pinterest.com/' target='_blank'>
          <ImPinterest />
        </a>
      </li>
      <li>
        <a href='https://twitter.com/' target='_blank'>
          <ImTwitter />
        </a>
      </li>
      <li>
        <a href='https://youtube.com/' target='_blank'>
          <ImYoutube />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
