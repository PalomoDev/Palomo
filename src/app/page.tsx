import {Cover} from "@/app/ui/components/cover";
import {getHome} from "@/app/lib/api/sanitClient";
import { isMobile } from 'react-device-detect'


const HOME_LIST = '*[_type == "home"][0].cover[]{description, "imageUrl": image.asset->url}'

interface Props {
    deviceType: string;
}


export default async function Home() {
    const homeArr = await getHome(HOME_LIST)
    console.log(homeArr)
    return (
        <main className={''}>
            <Cover homeArr={homeArr}/>
            <div>
                {isMobile ? <p>Это мобильное устройство</p> : <p>Это не мобильное устройство</p>}
            </div>
        </main>
    );
}
