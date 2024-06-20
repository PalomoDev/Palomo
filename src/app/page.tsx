import {getHome} from "@/app/lib/api/sanitClient";
import HomeCover from "@/app/ui/components/homeCover";





const BROWSER_HOME_LIST = '*[_type == "home"][0].cover[]{description, "imageUrl": image.asset->url}'
const MOBILE_HOME_LIST = '*[_type == "home"][1].cover[]{description, "imageUrl": image.asset->url}'



export default async function Home() {

    const browserHomeArr = await getHome(BROWSER_HOME_LIST)
    const mobileHomeArr = await getHome(MOBILE_HOME_LIST)
    const coverData = [browserHomeArr, mobileHomeArr]





    return (
        <main className={''}>
            {/*<Cover coverData={coverData}/>*/}
            <HomeCover coverData={coverData}/>
        </main>
    );
}
