import Layout from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const TakePicture  = () => {
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
              <p className='text-bold text-black text-base mb-3'>Good Morning</p>
              <p className='text-bold text-black text-base'>Franco Freso Dixo</p>
            </div>
            <div className="text-bold text-black text-base text-right">
              <p className='mb-3'>August 05 2024</p>
              <p>07:30:15</p>
            </div>
          </div>
          <div className="text-center mt-4 text-gray-600">Location Id</div>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
        <img 
            src="/assets/icons/separator.svg" 
            alt="separator"
            width={420}
            className="mb-6 mt-6 items-center justify-end"
            />
          <div className="bg-gray-200 p-3 rounded-lg mb-4 w-10/12 grid justify-center items-center gap-2">
          <img 
            src='/assets/icons/Camera2.svg'
            className='items-center justify-center'
          />             
          </div>
          <Button className="bg-[#BE4747] text-white rounded flex items-center justify-center">
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