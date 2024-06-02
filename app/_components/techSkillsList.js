import Image from 'next/image';

import Python from '../media/photos/python-logo.png';
import CSharp from '../media/photos/c_sharp_logo.png';
import Java from '../media/photos/java-4-logo.png';
import JavaScript from '../media/photos/JavaScript-logo.png';
import NodeJs from '../media/photos/nodeJs-logo.png';
import MySQL from '../media/photos/Mysql_logo.png';
import ReactLogo from '../media/photos/react-logo.png';
import HTMLLogo from '../media/photos/html5.png';
import CSSLogo from '../media/photos/css-logo.png';

import UnityLogo from '../media/photos/unity-logo.png';
import FireBase from '../media/photos/firebase-logo.png';
import DockerLogo from '../media/photos/docker-logo.png';
import AndroidStudio from '../media/photos/android-studio.webp';
import MariaDB from '../media/photos/maria-db.png';

export default function TechSkillsList() {
    const technologies = [
        { name: 'Python', logo: Python },
        { name: 'C#', logo: CSharp },
        { name: 'JavaScript', logo: JavaScript },
        { name: 'Node.js', logo: NodeJs },
        { name: 'Java', logo: Java },
        { name: 'MySQL', logo: MySQL },
        { name: 'React', logo: ReactLogo },
        { name: 'HTML', logo: HTMLLogo },
        { name: 'CSS', logo: CSSLogo },
        { name: 'Unity', logo: UnityLogo },
        { name: 'Firebase', logo: FireBase },
        { name: 'Docker', logo: DockerLogo },
        { name: 'Android Studio', logo: AndroidStudio },
        { name: 'MariaDB', logo: MariaDB }
      ];

      return (
        <div className='my-12 bg-day-two'>
            <h1 className='text-4xl font-bold mx-0 text-center sm:mb-8 text-day-three font-serif italic'>Programming Languages and Technologies</h1>
            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 p-2'>
                {technologies.map((tech, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <Image src={tech.logo} alt={tech.name} width={50} height={50} />
                        <p className='text-day-one mt-2 text-day-three'>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}