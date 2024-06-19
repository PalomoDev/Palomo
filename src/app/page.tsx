import {Cover} from "@/app/ui/components/cover";
import {getHome} from "@/app/lib/api/sanitClient";

const HOME_LIST = '*[_type == "home"][0].cover[]{description, "imageUrl": image.asset->url}'

export default async function Home() {
    const homeArr = await getHome(HOME_LIST)
    console.log(homeArr)
    return (
    <main className={''}>
        <Cover homeArr={homeArr}/>
    </main>
  );
}
