import Image from 'next/image';
import ProfilePic from '../media/photos/pf_pic.png';

export default function ProfilePicture() { 
    return (
        <div className='bg-day-three'>
            <Image src={ProfilePic} className="max-w-6/12" alt="Profile Picture"/>
        </div>
    );
}