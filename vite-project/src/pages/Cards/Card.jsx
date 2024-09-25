import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
const notifications = [
  {
    title: "Full stuck web appplication development.",
    description: "Create powerful web apps, push the boundaries of innovation, and achieve excellence",
    link:"https://www.chalmers.se/_next/image/?url=https:%2F%2Fcms.www.chalmers.se%2FMedia%2Fmb3hi4kn%2Fcoding-7-1920.jpg%3Fwidth%3D1920%26height%3D1080%26rnd%3D133293116108230000%26quality%3D60%26format%3Dwebp&w=3840&q=85",
  },
  {
    title: "Geraphic Design",
    description: "Unleash your creativity and build stunning designs that stand out!",
    link:"https://th.bing.com/th/id/OIP.2nh09WdYZw-6XQnopg_wdwHaEO?w=1792&h=1024&rs=1&pid=ImgDetMain",
  },
  {
    title: "make your skill with treinding area(digital world)",
    description: "Transform your marketing skills and achieve impactful results in the digital world.",
     link:"https://th.bing.com/th/id/OIP.XieHOGMxdao-8h688P-YBQHaEc?rs=1&pid=ImgDetMain"
  },
];

export function CardDemo({ className, ...props }) {
  return (
    <>
    {notifications.map((data)=>(
      <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        
          
        <CardTitle>
         {data.title}
        </CardTitle>
      
        
        
      </CardHeader>
      <CardContent className="grid gap-4">
        
        <div className="flex items-center space-x-4 rounded-md ">
          <div className="flex-1 space-y-1 ">
            <img className="rounded-md cover items-center" src={data.link} alt=""  />
          </div>
        </div>
    
        <CardDescription>{data.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link to="/registration">
        <Button>Register Now</Button>
        </Link>
      </CardFooter>
    </Card>
    ))}
    
    </>
  );
}
