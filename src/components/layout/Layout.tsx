import { Dot } from 'lucide-react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

export const Layout = () => {
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (
        <>
            <nav
                style={{ justifySelf: 'anchor-center' }}
                className={`fixed top-4 z-10 rounded-full border p-1 duration-300 ease-out flex items-center justify-between gap-12 backdrop-blur-lg expandable-nav`}
            >
                <Button size={'icon'} className='rounded-full'>
                    PW
                </Button>
                <div className='flex items-center'>
                    <NavLink to='/' end>
                        Home
                    </NavLink>
                    <Dot />
                    <NavLink to='/table' end>
                        Table
                    </NavLink>
                </div>
                <DarkModeToggle />
            </nav>

            {/* will either be <Home/> or <Settings/> */}
            <div className='h-[1000dvh]'>
                <Outlet />
            </div>
        </>
    );
};
