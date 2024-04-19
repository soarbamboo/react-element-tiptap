import React, {PropsWithChildren} from 'react';
import {TagProps} from './interface';

const Tag: React.FC<PropsWithChildren<TagProps>> = ({ className, ...props }) => {
  return <div className='my-button' {...props} />;
};

export default Tag;
