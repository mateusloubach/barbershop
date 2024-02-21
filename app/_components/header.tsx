import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button"; 
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";


const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 justify-between items-center flex flex-row">
                <Image 
                    src="/mainlogo.png" alt="barbershopLogo" height={122} width={220} 
                />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={"outline"} size={"icon"} >
                            <MenuIcon size={18}/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
     );
}
 
export default Header;