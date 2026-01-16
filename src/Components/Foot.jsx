import React from 'react';

const Foot = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content p-6">
            <aside>
                <p className="font-bold text-lg">Hero.Io</p>
                <p>Building simple and powerful interfaces</p>
            </aside>

            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover">Item 1</a>
                    <a className="link link-hover">Item 2</a>
                    <a className="link link-hover">Item 3</a>
                </div>
            </nav>

            <aside>
                <p>© 2026 Hero.Io — All rights reserved</p>
            </aside>
        </footer>
    );
};

export default Foot;