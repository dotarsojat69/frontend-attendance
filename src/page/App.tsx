import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"

function Homepage() {

  return (
    <Layout>
      <div className="">

      <header className="p-3 bg-[#E57B5C] min-h-[260px]">
        <div className="text-white text-base justify-center items-center flex ">☑️Attendance</div>
        <Card className="bg-white p-4 z-50 bottom-[60px]">
          <CardContent className="p-4">
            <h2 className="text-gray-500">Good Morning</h2>
            <h1 className="text-2xl font-bold mb-4">Franco</h1>
            <div className="flex justify-between">
              <Button variant="ghost" className="flex flex-col items-center">
                <img src="/camera-icon.png" alt="absence" className="w-8 h-8 mb-1" />
                <span>absence</span>
              </Button>
              <Button variant="ghost" className="flex flex-col items-center">
                <img src="/clock-icon.png" alt="Too Late" className="w-8 h-8 mb-1" />
                <span>Too Late</span>
              </Button>
              <Button variant="ghost" className="flex flex-col items-center">
                <img src="/document-icon.png" alt="permit" className="w-8 h-8 mb-1" />
                <span>permit</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </header>
      <main className="p-4">

        <div className="flex justify-between mb-4">
          <Button className="bg-red-500 text-white w-[48%] py-2">
            Absence IN<br />07:50:00
          </Button>
          <Button className="bg-orange-400 text-white w-[48%] py-2">
            Absence OUT<br />17:00:00
          </Button>
        </div>

        <div className="mb-4">
          <h2 className="font-bold">July Attendance <span className="float-right">↑ 2024</span></h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <Card className="p-4 bg-gray-200">
              <h3 className="font-bold">Attend</h3>
              <p>1 Day</p>
            </Card>
            <Card className="p-4 bg-gray-200">
              <h3 className="font-bold">Permit</h3>
              <p>0 Day</p>
            </Card>
            <Card className="p-4 bg-gray-200">
              <h3 className="font-bold">Sick</h3>
              <p>0 Day</p>
            </Card>
            <Card className="p-4 bg-gray-200">
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

      <footer className="fixed bottom-0  bg-white">
        <div className="flex justify-around py-4">
          <Button variant="ghost" className="flex flex-col items-center">
            <img src="/home-icon.png" alt="Home" className="w-6 h-6 mb-1" />
            <span>Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <img src="/camera-icon.png" alt="Take Picture" className="w-6 h-6 mb-1" />
            <span>Take Picture</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <img src="/profile-icon.png" alt="Profile" className="w-6 h-6 mb-1" />
            <span>Profile</span>
          </Button>
        </div>
      </footer>
    </div>
    </Layout>
  )
}

export default Homepage
