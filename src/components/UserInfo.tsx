import {ReactNode} from 'react';
import {Image} from 'react-bootstrap';

import defaultAvatar from '../assets/default-user.svg';

interface UserInfoProps {
  children?: ReactNode;
  email?: string;
  avatar?: string;
}

export default function UserInfo({children, email, avatar}: UserInfoProps) {
  const userAvatar = avatar ? avatar : defaultAvatar;

  return (
    <div className='d-flex align-items-center'>
      <Image src={userAvatar} roundedCircle style={{width: '40px', height: '40px'}} />
      {children && <span className='ms-3 text-uppercase'>{children}</span>}
      {email && <small className='ms-1'>({email})</small>}
    </div>
  );
}
