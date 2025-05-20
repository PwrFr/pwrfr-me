import { useEffect, useState } from 'react';
function App() {
    const [isPhone, setIsPhone] = useState(false);
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        if (
            navigator.userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
            )
        ) {
            setIsPhone(true);
        }
    }, []);

    const technologies = [
        'HTML',
        'CSS',
        'JS',
        'Typescript',
        'Next.JS',
        'Nuxt.JS',
        'React.JS',
        'React Native',
        'Vue.JS',
        'UI',
        'Web Applications',
        'Responsive Design',
        'Front End Development',
        'Canva',
        'Figma',
    ];
    return (
        <>
            {isPhone ? (
                <div
                    className={`h-screen text-background p-8 bg-primary grid place-items-center`}
                >
                    <h1 className='text-[20dvw] '>PWRFR</h1>
                </div>
            ) : (
                <div className='zoom-name bg-primary z-50 relative flex justify-center items-center'>
                    <h1 className='text-[20dvw] text-background font-medium typing-animation text-center'>
                        P
                    </h1>
                    <h1 className='text-[20dvw] text-background font-medium typing-animation text-center'>
                        W
                    </h1>
                    <h1 className='text-[20dvw] text-background font-medium typing-animation text-center'>
                        R
                    </h1>
                    <h1 className='text-[20dvw] text-background font-medium typing-animation text-center'>
                        F
                    </h1>
                    <h1 className='text-[20dvw] text-background font-medium typing-animation text-center'>
                        R
                    </h1>
                </div>
            )}
            {/* {isPhone ? null : (
                    <>
                        <div className={`h-screen`}></div>
                        <div className={`h-screen`}></div>
                    </>
                )} */}
            <div className='relative z-10'>
                <div className={`h-screen sticky top-0 p-8 flex flex-col`}>
                    {/* <div className='w-full h-[20dvh] bg-amber-700 col-span-2'>
                        s
                    </div>
                    <div className='w-full h-full bg-amber-700'>s</div>
                    <div className='w-full h-full bg-amber-700'>s</div> */}
                    {/* <div className='fade-card'> */}
                    <div className='flex'>
                        <h1 className='text-9xl fade-card ' id='profile'>
                            <div className='bg-primary rounded-full w-6 h-6' />I
                            am Frontend Developer
                        </h1>
                    </div>
                    <p className='fade-card pb-4 flex-1'>
                        With a strong background in Vue.js, JavaScript, and
                        modern web technologies, I have successfully developed
                        and optimized CRM web applications, ensuring seamless
                        performance and maintainability. In my current role, I
                        am also a go-to resource for other frontend developers,
                        providing guidance on best practices, component
                        architecture, and library selection to improve project
                        efficiency. At Cloudsoft Co., Ltd., I have delivered
                        multiple projects by collaborating with Product Owners,
                        refining requirements, and implementing scalable
                        frontend solutions. While I am not a UX/UI expert, I
                        enjoy analyzing designs, suggesting improvements, and
                        finding alternative solutions to enhance user experience
                        and functionality. Additionally, while my primary
                        expertise is in Vue.js, I also have experience with
                        React.js from my university projects, giving me a solid
                        foundation in component-based development across
                        frameworks. I am eager to bring my technical expertise,
                        problem-solving mindset, and mentorship experience to
                        your team.
                    </p>
                    {/* </div> */}
                    <div className='fade-card'>
                        <div className='flex gap-4 overflow-auto px-4 '>
                            {technologies.map((skill, i) => (
                                <div
                                    className='bg-primary text-background px-4 py-2 min-w-max rounded-lg'
                                    key={i}
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {!isPhone ? (
                    <>
                        <div className={`h-screen`}></div>
                        <div className={`h-screen`}></div>
                        <div className={`h-screen`}></div>
                        <div className={`h-screen`}></div>
                        <div className={`h-screen`}></div>
                        <div className={`h-screen`}></div>
                        <div className={`h-screen`}></div>
                    </>
                ) : null}

                <div className={`h-[200dvh] sticky top-0 bg-background p-8`}>
                    <h1 className='text-9xl'>Skills</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestias, vero? Ut alias sapiente neque maxime
                        consequuntur aliquid fuga quia cupiditate, sunt delectus
                        animi aliquam, repellendus maiores, esse quod culpa
                        porro?
                    </p>
                </div>
                <div
                    className={`h-screen sticky top-0 bg-primary text-background p-8`}
                >
                    <h1 className='text-9xl'>Works</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores cum dolorum itaque nulla vitae vel quos qui
                        esse quia! Eveniet nisi sed voluptatem vitae soluta
                        laudantium, minus natus. Autem, ducimus.
                    </p>
                </div>
                <div
                    className={`h-screen bg-primary text-background p-8`}
                ></div>
            </div>
            <div className='relative'>
                <div className={`h-screen sticky top-0 p-8`}>
                    <h1 className='text-9xl'>About Me</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, illo? Deleniti maxime nisi suscipit commodi,
                        ipsum modi laborum sequi cumque, repellat hic quis! Unde
                        consequatur, obcaecati corrupti voluptates quia non?
                    </p>
                </div>
                <div className={`h-screen sticky top-0 bg-background p-8`}>
                    <h1 className='text-9xl'>Skills</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestias, vero? Ut alias sapiente neque maxime
                        consequuntur aliquid fuga quia cupiditate, sunt delectus
                        animi aliquam, repellendus maiores, esse quod culpa
                        porro?
                    </p>
                </div>
            </div>
            {/* <div className='bg-primary z-50 flex flex-col justify-center items-center'>
                <div className=' relative flex justify-center items-center'>
                    <h1 className='w-full text-[20dvw] leading-50 text-background font-medium text-center'>
                        P
                    </h1>
                    <h1 className='w-full text-[20dvw] leading-50 text-background font-medium text-center'>
                        A
                    </h1>
                    <h1 className='w-full text-[20dvw] leading-50 text-background font-medium text-center'>
                        W
                    </h1>
                    <h1 className='w-full text-[20dvw] leading-50 text-background font-medium text-center'>
                        A
                    </h1>
                    <h1 className='w-full text-[20dvw] leading-50 text-background font-medium text-center'>
                        R
                    </h1>
                    <h1 className='w-full text-[20dvw] leading-50 text-background font-medium text-center'>
                        I
                    </h1>
                    <h1 className='w-full text-[20dvw] leading-50 text-background font-medium text-center'>
                        S
                    </h1>
                </div>
                <p className='text-background'>Wongsaied</p>
            </div> */}
        </>
    );
}

export default App;
