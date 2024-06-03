"use client";
import React, { useEffect, useState } from 'react';
import FadeInIcon from './fadeInIcon';
import Image from 'next/image';

import GitHub from '../media/photos/linkIcons/github-mark.png';
import LinkedIn from '../media/photos/linkIcons/in-logo.png';
import Email from '../media/photos/linkIcons/email.png';

export default function ElseWhereLinks() {
    const icons = [
        { name: 'GitHub', icon: GitHub, url: 'https://github.com/Kiydo' },
        { name: 'LinkedIn', icon: LinkedIn, url: 'https://www.linkedin.com/in/edward-magtoto-964b711a0/?trk=opento_sprofile_goalscard' },
        { name: 'Email', icon: Email, url: 'mailto:e.magtoto@hotmail.com' }
    ];

    return (
        <div>
            <div className='flex items-center justify-center'>
                {icons.map((icon, index) => (
                    <FadeInIcon key={index} className="px-10 py-4 flex flex-col items-center justify-center">
                        <a
                            href={icon.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110'
                        >
                            <Image src={icon.icon} alt={icon.name} width={50} height={50} />
                            <p className='text-day-three-hoverable text-center'>{icon.name}</p>
                        </a>
                    </FadeInIcon>
                ))}
            </div>
        </div>
    );
}