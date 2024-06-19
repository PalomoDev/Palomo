
import {PortableText} from '@portabletext/react';



export const AboutContent = ({ content }) => {
    return (
        <div>
            <PortableText
                value={content}
                serializers={{
                    types: {
                        // Пример для стилизации элемента h1 с использованием Tailwind CSS
                        h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
                        // Пример для стилизации элемента h2
                        h2: ({ children }) => <h2 className="text-2xl font-bold mb-4">{children}</h2>,
                        // Пример для стилизации элемента p
                        normal: ({ children }) => <p className="mb-4">{children}</p>,
                        // Добавьте другие типы элементов по мере необходимости
                    },
                }}
            />
        </div>
    );
};