import React from "react";

export default function Header() {
    return (
        <header className="h-32 w-screen bg-dark-black flex p-6 items-center justify-between text-sortOf-white text-base font-poppins border-b border-b-rose overflow-hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 cursor-pointer lg:hidden">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>

            <nav className="hidden lg:flex h-16 space-x-4 items-center justify-around ">
                <a
                    href="/auth"
                    className="h-10 w-48 flex items-center justify-center hover:bg-rose text-white rounded-xl">
                    Connexion
                </a>
                <a
                    href="/chat"
                    className="h-10 w-48 flex  justify-center items-center text-center hover:bg-rose text-white rounded-xl">
                    Inscription
                </a>
            </nav>
        </header>
    );
}
