'use client'
import Image from "next/image";
import React, {useState} from "react";
import Modal from "@/app/ui/components/modal";
import Slider from "@/app/ui/components/slider";
import {string} from "yup";

interface ShotsListProps {
    shotsArr: string[],
    movieTitle: string,

}

const ShotsList: React.FC<ShotsListProps> = ({shotsArr, movieTitle}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [clickImage, setClickImage] = useState<number>(0);

    const openModal = (index: number) => {
        setClickImage(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const shotsList = shotsArr.map((shot, index) => (
        <div key={index + 1} className="relative" onClick={() => openModal(index + 1)}>
            <Image src={shot} alt={`${movieTitle} shot`} width={700} height={393}/>
        </div>
    ));

    return (
        <>
            <div className="grid grid-cols-2 gap-[40px] mt-[30px]">
                {shotsList}
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="bg-red-500">
                    <div className="w-[1440px] h-[585px]">
                        <Slider images={shotsArr} current={clickImage - 1}/>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ShotsList;
