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
      ];

      return (
        <div className='bg-day-two'>
            <h1 className='text-4xl font-bold mx-0 text-center sm:mb-0 text-fixed-day-one'>Programming Languages and Technologies</h1>
            <div className='flex flex-col sm:flex-row justify-between items-center px-4 py-4 sm:mx-20'>
                <div className='flex flex-wrap space-x-8 sm:space-x-12'>
                    {technologies.map((tech, index) => (
                        <div key={index} className='flex flex-col items-center'>
                            <Image src={tech.logo} alt={tech.name} width={50} height={50} />
                            <p className='text-day-one'>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )
}