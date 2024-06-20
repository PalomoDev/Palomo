
import FullHeightWrapper from '@/app/ui/components/FullHeightWrapper';

const Home: React.FC = () => {
    return (
        <FullHeightWrapper>
            <div className="flex items-center justify-center min-h-full">
                <p>
                    Это пример текста, который занимает всю высоту экрана, учитывая нижнее меню на Android.
                </p>
            </div>
        </FullHeightWrapper>
    );
};

export default Home;
