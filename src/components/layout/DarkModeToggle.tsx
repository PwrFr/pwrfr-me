import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(() =>
        document.documentElement.classList.contains('dark')
    );

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <Button
            className='rounded-full'
            size={'icon'}
            onClick={() => setIsDark(!isDark)}
        >
            {isDark ? <Moon /> : <Sun />}
        </Button>
    );
}
