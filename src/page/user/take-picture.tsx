import Layout from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useEffect, useState } from 'react';

const TakePicture  = () => {
  const [name, setUserName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [dateTime, setDateTime] = useState(new Date());
  const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    const hours = dateTime.getHours();
    if (hours < 12) {
      setGreeting('Good Morning');
    } else if (hours < 16) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }

    const timer = setInterval(() => setDateTime(new Date()), 1000);

    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });

    return () => clearInterval(timer);
  }, [dateTime]);

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleTakePicture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      video.play();
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      video.addEventListener('canplay', () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context?.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/png');
        setPhoto(dataUrl);
        stream.getTracks().forEach((track) => track.stop());
      });
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleTakeAPicture = () => {
    if (photo && location) {
      // Submit photo and location to the server or handle them as needed
      console.log('Photo:', photo);
      console.log('Location:', location);
    }
  };
  
  return (
    <Layout>
    <div className="">
      <header className="p-3 min-h-screen">
      <div className="items-center justify-center flex mb-3 h-14 bg-[#E57B5C]">
          <img 
          src="/assets/icons/Attendance.svg" 
          alt="attendance"
          className=''
          />
        </div>
      <Card className="w-full bg-[#777575]">
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <div className=''>
              <p className='text-bold text-black text-base mb-3'>{greeting}</p>
              <p className='text-bold text-black text-base' onChange={handleUserNameChange}>{name}</p>
            </div>
            <div className="text-bold text-black text-base text-right">
              <p className='mb-3'>{dateTime.toLocaleDateString()}</p>
              <p>{dateTime.toLocaleTimeString()}</p>
            </div>
          </div>
          <div className="text-center mt-4 text-gray-600">{location ? `Lat, Long: ${location.latitude}, ${location.longitude}` : 'Loading location...'}</div>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
        <img 
            src="/assets/icons/separator.svg" 
            alt="separator"
            width={420}
            className="mb-6 mt-6 items-center justify-end"
            />
          <div className="bg-gray-200 p-3 rounded-lg mb-4 w-10/12 grid justify-center items-center gap-2">
          {photo ? (
            <img src={photo} alt="User" className="w-24 h-24 rounded-full" />
          ) : (
            <div onClick={handleTakePicture}>
              <img 
                src='/assets/icons/Camera2.svg'
              />
            </div>
          )}             
          </div>
          <Button onClick={handleTakeAPicture} className="bg-[#BE4747] text-white rounded flex items-center justify-center">
            <img
                src='/assets/icons/Camera.svg'
            />
            <span className="ml-2">Take a picture</span>
          </Button>
        </CardContent>
      </Card>
      </header>
      </div>
      </Layout>
  )
}

export default TakePicture 