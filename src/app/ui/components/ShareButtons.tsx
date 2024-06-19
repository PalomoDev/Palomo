// @ts-nocheck
'use client'
import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'react-share';

interface ShareButtonsProps {
    url: string;
    title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
    return (
        <div className="flex w-full space-x-4">
            <FacebookShareButton url={url} quote={title}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>


            <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
        </div>
    );
};

export default ShareButtons;
