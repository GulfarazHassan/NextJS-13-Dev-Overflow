import {Input} from '@/components/ui/input';
import Image from 'next/image';
import React from 'react';

interface CustomProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  pleaceholder: string;
  otherClasses: string;
}

const LocalSearch = ({
  route,
  iconPosition,
  imgSrc,
  pleaceholder,
  otherClasses,
}: CustomProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}>
      {iconPosition === 'left' && (
        <Image
          src={imgSrc}
          alt='search icon'
          width={24}
          height={24}
          className='cursor-pointer'
        />
      )}
      <Input
        type='text'
        placeholder='Search globally'
        className='
        background-light800_darkgradient paragrapg-regular no-focus border-none shadow-none outline-none'
      />
      {iconPosition === 'right' && (
        <Image
          src={imgSrc}
          alt='search icon'
          width={24}
          height={24}
          className='cursor-pointer'
        />
      )}
    </div>
  );
};

export default LocalSearch;
