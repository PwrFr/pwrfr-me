import { useEffect, useState } from 'react';

function App() {
    const [isPhone, setIsPhone] = useState(false);
    useEffect(() => {
        if (
            navigator.userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
            )
        ) {
            setIsPhone(true);
        }
    }, []);
    return (
        <>
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
            <div className='relative z-10'>
                {isPhone ? (
                    <div
                        className={`h-screen text-background p-8 bg-primary grid place-items-center`}
                    >
                        <h1 className='text-[20dvw] '>PWRFR</h1>
                    </div>
                ) : null}
                <div className={`h-screen sticky top-0 p-8`}>
                    <h1 className='text-[8dvw] fade-card' id='profile'>
                        <div className='bg-primary rounded-full w-6 h-6'></div>I
                        am{' '}
                        <span className='font-medium'>Frontend Developer</span>
                    </h1>
                    <p className='fade-card'>
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
                        your team. I would love the opportunity to discuss how
                        my skills align with your company’s goals.
                    </p>
                </div>
                {!isPhone ? (
                    <>
                        <div className={`h-screen`}></div>
                        <div className={`h-screen`}></div>
                    </>
                ) : null}

                <div className={`h-screen sticky top-0 bg-background p-8`}>
                    <h1 className='text-[8dvw]'>Skills</h1>
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
                    <h1 className='text-[8dvw]'>Works</h1>
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
                    <h1 className='text-[8dvw]'>About Me</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, illo? Deleniti maxime nisi suscipit commodi,
                        ipsum modi laborum sequi cumque, repellat hic quis! Unde
                        consequatur, obcaecati corrupti voluptates quia non?
                    </p>
                </div>
                <div className={`h-screen sticky top-0 bg-background p-8`}>
                    <h1 className='text-[8dvw]'>Skills</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestias, vero? Ut alias sapiente neque maxime
                        consequuntur aliquid fuga quia cupiditate, sunt delectus
                        animi aliquam, repellendus maiores, esse quod culpa
                        porro?
                    </p>
                </div>
            </div>
            <div className=' bg-primary z-50 relative flex justify-center items-center leading-60'>
                <h1 className='text-[20rem] text-background font-medium text-center'>
                    P
                </h1>
                <h1 className='text-[20rem] text-background font-medium text-center'>
                    A
                </h1>
                <h1 className='text-[20rem] text-background font-medium text-center'>
                    W
                </h1>
                <h1 className='text-[20rem] text-background font-medium text-center'>
                    A
                </h1>
                <h1 className='text-[20rem] text-background font-medium text-center'>
                    R
                </h1>
                <h1 className='text-[20rem] text-background font-medium text-center'>
                    I
                </h1>
                <h1 className='text-[20rem] text-background font-medium text-center'>
                    S
                </h1>
            </div>
        </>
    );
}

export default App;
