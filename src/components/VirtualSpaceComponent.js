import React, { useRef, useState, useEffect } from 'react';
import './VirtualSpaceComponent.css';
import images from '../images';
import DropdownMenu from "./DropdownMenu";

const VirtualSpace = () => {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onMouseDown = (e) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const onMouseLeave = () => {
        setIsDragging(false);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        const handleMouseUp = () => setIsDragging(false);
        const handleMouseLeave = () => setIsDragging(false);

        if (scrollContainer) {
            scrollContainer.addEventListener('mouseup', handleMouseUp);
            scrollContainer.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('mouseup', handleMouseUp);
                scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="virtual-space">

            <div className="welcometovs-section">
                <img src={images.navarrows} alt="nav arrows" className="vs-navarrows"></img>
                <img src={images.character} alt="Welcome image" className="welcometovs-img"></img>
                <p className="welcometovs-text">Welcome to my virtual space! </p>
                <p className="welcometovs-text2">Hover over items in my virtual room to check out some of my
                    creations and to learn more about me!</p>
            </div>
            <div
                className="scroll-container"
                ref={scrollContainerRef}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
            >
                <div className="scroll-section">
                    <div className="virtual-space-container">
                        <div className="room-items">
                            <img src={images.desk} alt="Desk" className="desk"/>

                            <img src={images.easell} alt="Easel" className="easel"/>
                            <img src={images.leoonseal} alt=" Leo on seal" className="leoonseal"/>


                            <img src={images.vinyls} alt="Vinyls" className="vinyls"/>
                            <img src={images.bass} alt="Bass" className="bass"/>
                            <img src={images.guitar} alt="Guitars" className="guitars"/>
                            <img src={images.target} alt="Target" className="target"/>
                            <img src={images.filecabinet} alt="File cabinet" className="file-cabinet"/>
                            <img src={images.arrows} alt="Arrows" className="arrows"/>
                            <img src={images.bow} alt="Bow" className="bow"/>
                        </div>
                        <img src={images.plant} alt="Plant" className="plant"/>
                        <img src={images.saturnposter} alt="Saturn poster" className="saturn-poster"></img>

                    </div>
                </div>
            </div>
            <DropdownMenu />
        </div>
    );
};

export default VirtualSpace;
