'use client';
import Demo from '@/components/Demo';
import { useState } from 'react';

export default function Home() {
    const [count, setCount] = useState<number>(0);
    return (
        <main>
            <Demo />
            {count} <br />
            <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        </main>
    );
}
