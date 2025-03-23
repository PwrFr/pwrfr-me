function App() {
    return (
        <>
            <div className='zoom-name bg-primary z-0'>
                <h1 className='text-[20dvw] text-background font-medium absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]'>
                    PWRFR
                </h1>
            </div>
            <div className='relative z-10'>
                <div className={`h-screen sticky top-0 p-8`}>
                    <h1 className='text-[8dvw] fade-card'>About Me</h1>
                    <p className='fade-card'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, illo? Deleniti maxime nisi suscipit commodi,
                        ipsum modi laborum sequi cumque, repellat hic quis! Unde
                        consequatur, obcaecati corrupti voluptates quia non?
                    </p>
                </div>
                <div className={`h-screen`}></div>
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
        </>
    );
}

export default App;
