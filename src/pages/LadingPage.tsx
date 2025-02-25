function App() {
    return (
        <>
            <div className='h-screen sticky top-0 zoom-name pointer-events-none'>
                <h1 className='text-[20dvw] font-medium absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]'>
                    PWRFR
                </h1>
            </div>
            {Array.from({ length: 10 }, (_, i) => (
                <div
                    key={i}
                    className={`h-screen grid fade-card p-24 border-b ${
                        i % 2 == 0 || 'text-right'
                    }`}
                >
                    <h1 className='text-[10dvw] '>{i + 1}</h1>
                </div>
            ))}
        </>
    );
}

export default App;
