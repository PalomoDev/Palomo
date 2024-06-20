
import {Cover} from "@/app/ui/components/cover";
import {getHome} from "@/app/lib/api/sanitClient";
import Detect from "@/app/ui/components/detect";





const HOME_LIST = '*[_type == "home"][0].cover[]{description, "imageUrl": image.asset->url}'




export default async function Home() {

    const homeArr = await getHome(HOME_LIST)
    console.log(homeArr)




    return (
        <main className={''}>
            <Cover homeArr={homeArr}/>
            <Detect/>


        </main>
    );
}
