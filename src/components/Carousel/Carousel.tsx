import styles from './carousel.module.scss';
import React, {Children, cloneElement, useEffect} from "react";
import {FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";
import {CarouselProps} from "../../models/types/props/CarouselProps";

const PAGE_WIDTH = 233;

const Carousel: React.FC<CarouselProps> = ({children}) => {
    const [pages, setPages] = React.useState<JSX.Element[]>([])
    const [offset, setOffset] = React.useState<number>(0)

    const handleLeftArrowClick = () => {
        setOffset(current => {
            const newOffset = current + PAGE_WIDTH
            return Math.min(newOffset, 0)
        })
    }

    const handleRightArrowClick = () => {
        setOffset(current => {
            const newOffset = current - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages?.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`
                    }
                })
            })
        )
    }, [])

    return (
        <div className={styles.main}>
            <FaChevronCircleLeft className={styles.arrow} onClick={handleLeftArrowClick}/>
            <div className={styles.window}>
                <div className={styles.all} style={{
                    transform: `translateX(${offset}px)`
                }}>
                    {children}
                </div>
            </div>
            <FaChevronCircleRight className={styles.arrow} onClick={handleRightArrowClick}/>
        </div>
    );
};

export default Carousel;