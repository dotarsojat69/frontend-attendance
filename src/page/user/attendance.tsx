import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useState, useEffect } from 'react';

const Attendance: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [greeting, setGreeting] = useState('Good Morning');
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

  const handleAbsenceIn = () => {
    if (photo && location) {
      // Submit photo and location to the server or handle them as needed
      console.log('Photo:', photo);
      console.log('Location:', location);
    }
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
      <header className="w-full bg-orange-500 p-4 text-white flex justify-between items-center">
        <div className="text-lg font-bold">Attendance</div>
        <button className="bg-orange-600 p-2 rounded-md">☰</button>
      </header>

      <Card className="w-full max-w-md mt-4">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <p>{greeting}</p>
              <p>{userName || 'Enter your name'}</p>
            </div>
            <div className="text-right">
              <p>{dateTime.toLocaleDateString()}</p>
              <p>{dateTime.toLocaleTimeString()}</p>
            </div>
          </div>
          <div className="text-center mt-4 text-gray-600">
            {location ? `Location: ${location.latitude}, ${location.longitude}` : 'Loading location...'}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={handleUserNameChange}
            className="mb-4 p-2 rounded"
          />
          <div className="bg-gray-300 p-4 rounded-lg mb-4 w-full flex justify-center items-center">
            {photo ? (
              <img src={photo} alt="User" className="w-24 h-24 rounded-full" />
            ) : (
              <div
                className="w-24 h-24 rounded-full bg-black flex items-center justify-center cursor-pointer"
                onClick={handleTakePicture}
              >
                📷
              </div>
            )}
          </div>
          <Button className="bg-red-600 text-white p-3 rounded w-full flex items-center justify-center" onClick={handleAbsenceIn}>
            <span>📷</span>
            <span className="ml-2">Absence IN</span>
          </Button>
        </CardContent>
      </Card>

      <footer className="fixed bottom-0 w-full bg-orange-500 p-4 flex justify-around text-white">
        <Button className="flex flex-col items-center">
          <span>🏠</span>
          <span className="mt-1">Home</span>
        </Button>
        <Button className="flex flex-col items-center">
          <span>📸</span>
          <span className="mt-1">Take Picture</span>
        </Button>
        <Button className="flex flex-col items-center">
          <span>👤</span>
          <span className="mt-1">Profile</span>
        </Button>
      </footer>
    </div>
  );
};

export default Attendance;
