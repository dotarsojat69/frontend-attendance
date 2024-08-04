import {
  Card,
  CardContent,
} from "@/components/ui/card"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"

function Homepage() {

  return (
    <Layout>
      <div className="">

      <header className="p-3 bg-[#E57B5C] max-h-screen">
        <div className="items-center justify-center flex mb-3">
          <img 
          src="/assets/icons/Attendance.svg" 
          alt="attendance" 
          />
        </div>
        <Card className="bg-white p-4 ">
          <CardContent className="p-3">
            <h2 className="text-gray-500">Good Morning</h2>
            <h1 className="text-2xl font-bold mb-4">Franco</h1>
            <img 
            src="/assets/icons/separator.svg" 
            alt="separator"
            width={420}
            className="mb-6 mt-6"
            />
            <div className="grid grid-flow-col justify-between">
              <div className="">
              <Button className="flex-col flex tems-center p-3 bg-[#E57B5C]">
                <img src="/assets/icons/Camera.svg" alt="absence" className="w-full" />
              </Button>
                <p className="text-center items-center justify-center">absence</p>
              </div>
              <div className="">
              <Button className="flex flex-col items-center p-3 bg-[#E57B5C]">
                <img src="/assets/icons/Clock.svg" alt="Too Late" className="w-full" />
              </Button>
                <span className="justify-center">Too Late</span>
              </div>
              <div>
              <Button className="flex flex-col items-center p-3 bg-[#E57B5C]">
                <img src="/assets/icons/Files.svg" alt="permit" className="w-full" />
              </Button>
                <span className="justify-center">permit</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </header>
      <main className="p-4">

        <div className="flex justify-between mb-4">
          <Button className="bg-red-500 text-white py-2 gap-3 w-[160px] h-[95px]">
            Absence IN
            <br /><br />
            07:50:00
          </Button>
          <Button className="bg-orange-400 text-white py-2 w-[160px] h-[95px]">
            Absence OUT<br /><br />
            17:00:00
          </Button>
        </div>

        <div className="mb-4">
          <div className="flex gap-20">
          <h2 className="font-bold">July Attendance</h2>
          {/* select year */}
          <Button variant="ghost">
          <h2 className="font-bold">↑ 2024</h2>
          </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <Card className="p-4 bg-gray-400">
              <h3 className="font-bold">Attend</h3>
              <p>1 Day</p>
            </Card>
            <Card className="p-4 bg-gray-400">
              <h3 className="font-bold">Permit</h3>
              <p>0 Day</p>
            </Card>
            <Card className="p-4 bg-gray-400">
              <h3 className="font-bold">Sick</h3>
              <p>0 Day</p>
            </Card>
            <Card className="p-4 bg-gray-400">
              <h3 className="font-bold">Late</h3>
              <p>1 Day</p>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-2">Last 1 week</h2>
          <table className="w-full">
            <thead className="bg-orange-400 text-white">
              <tr>
                <th className="py-2">NO</th>
                <th className="py-2">Date</th>
                <th className="py-2">Clock In</th>
                <th className="py-2">Clock Out</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="py-2">1</td>
                <td className="py-2">Jul 06 2024</td>
                <td className="py-2">07:50:00</td>
                <td className="py-2">17:00:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

    </div>
    </Layout>
  )
}

export default Homepage
