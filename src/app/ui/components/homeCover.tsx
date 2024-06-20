import dynamic from 'next/dynamic';
import React from 'react';
import { Home } from "@/app/lib/api/types";

interface CoverProps {
    coverData: Home[][];
}

const GrayCard: React.FC = () => {
    return (
        <div className={'min-h-[448px] md:h-[585px] min-w-[336px] md:w-[1440px] bg-gray-500'}></div>
    );
}

const DynamicDeviceInfo = dynamic<CoverProps>(() => import('./dynamicCover'), {
    loading: () => <GrayCard />,
    ssr: false,
});

const HomeCover: React.FC<CoverProps> = ({ coverData }) => {
    return (
        <div>
            {/* The loading component will be rendered while <DynamicDeviceInfo /> is loading */}
            <DynamicDeviceInfo coverData={coverData} />
        </div>
    );
};

export default HomeCover;
